import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type AuthMode = 'login' | 'signup';
type Role = 'student' | 'tutor';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { user, signIn, signUp } = useAuth();

  const [mode, setMode] = useState<AuthMode>('login');
  const [role, setRole] = useState<Role>('student');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  // Validation states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/student-homepage');
    }
  }, [user, navigate]);

  // Debounced username check
  useEffect(() => {
    if (!username || username.length < 3) {
      setUsernameAvailable(null);
      return;
    }

    const timer = setTimeout(async () => {
      setCheckingUsername(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .maybeSingle();

      setCheckingUsername(false);
      setUsernameAvailable(!data && !error);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  // Password strength calculation
  const getPasswordStrength = useCallback((pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    return strength;
  }, []);

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'];

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (mode === 'signup') {
      if (!fullName) {
        newErrors.fullName = 'Full name is required';
      }

      if (!username) {
        newErrors.username = `${role === 'student' ? 'Student' : 'Tutor'} ID is required`;
      } else if (username.length < 3) {
        newErrors.username = 'ID must be at least 3 characters';
      } else if (usernameAvailable === false) {
        newErrors.username = 'This ID is already taken';
      }

      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (mode === 'login') {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Invalid email or password');
          } else if (error.message.includes('Email not confirmed')) {
            toast.error('Please verify your email before logging in');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Welcome back!');
          navigate('/student-homepage');
        }
      } else {
        // Call backend signup endpoint for email verification
        try {
          const response = await fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: fullName,
              student_id: username,
              email,
              password,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            if (data.error?.includes('already registered')) {
              toast.error('This email is already registered');
            } else {
              toast.error(data.error || 'Signup failed');
            }
          } else {
            toast.success('Registration successful! Check your email for verification link.');
            navigate('/verify-email');
          }
        } catch (err) {
          console.error('Signup error:', err);
          toast.error('Signup failed. Please try again.');
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setUsername('');
    setErrors({});
    setUsernameAvailable(null);
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    resetForm();
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {mode === 'login' ? 'Welcome Back!' : `${role === 'student' ? 'Student' : 'Tutor'} Registration`}
        </h2>

        {mode === 'signup' && (
          <div className="role-toggle">
            <button
              type="button"
              className={`role-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
            >
              Student
            </button>
            <button
              type="button"
              className={`role-btn ${role === 'tutor' ? 'active' : ''}`}
              onClick={() => setRole('tutor')}
            >
              Tutor
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <input
                type="text"
                className={`auth-input ${errors.fullName ? 'error' : ''}`}
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => validateForm()}
              />
              {errors.fullName && <p className="validation-error">{errors.fullName}</p>}

              <div className="relative">
                <input
                  type="text"
                  className={`auth-input ${errors.username ? 'error' : ''}`}
                  placeholder={`${role === 'student' ? 'Student' : 'Tutor'} ID`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s/g, ''))}
                  onBlur={() => validateForm()}
                />
                {checkingUsername && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    Checking...
                  </span>
                )}
                {!checkingUsername && usernameAvailable === true && username.length >= 3 && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-sm">
                    ✓ Available
                  </span>
                )}
                {!checkingUsername && usernameAvailable === false && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 text-sm">
                    ✗ Taken
                  </span>
                )}
              </div>
              {errors.username && <p className="validation-error">{errors.username}</p>}
            </>
          )}

          <input
            type="email"
            className={`auth-input ${errors.email ? 'error' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateForm()}
          />
          {errors.email && <p className="validation-error">{errors.email}</p>}

          <input
            type={showPassword ? 'text' : 'password'}
            className={`auth-input ${errors.password ? 'error' : ''}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validateForm()}
          />
          {errors.password && <p className="validation-error">{errors.password}</p>}

          {mode === 'signup' && password && (
            <div className="password-strength">
              <div className="strength-bar">
                <div
                  className="strength-fill"
                  style={{
                    width: `${(passwordStrength / 4) * 100}%`,
                    background: strengthColors[passwordStrength],
                  }}
                />
              </div>
              <p className="strength-text" style={{ color: strengthColors[passwordStrength] }}>
                {strengthLabels[passwordStrength]}
              </p>
            </div>
          )}

          {mode === 'signup' && (
            <>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className={`auth-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => validateForm()}
              />
              {errors.confirmPassword && <p className="validation-error">{errors.confirmPassword}</p>}
            </>
          )}

          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="auth-footer">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <span className="auth-link" onClick={toggleMode}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="auth-link" onClick={toggleMode}>
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
