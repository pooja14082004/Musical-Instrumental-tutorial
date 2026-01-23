import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const StudentHomepage: React.FC = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo text-xl font-bold">🎵 Music Academy</h1>
        <div className="flex items-center gap-4">
          <span className="text-white/80">
            Welcome, {profile?.full_name || user?.email}
          </span>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="section">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Card */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Welcome to Your Dashboard! 🎉
            </h2>
            <p className="text-muted-foreground mb-6">
              Your account has been verified successfully. You're now ready to explore our music classes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2 text-foreground">Your Profile</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Name:</strong> {profile?.full_name || 'Not set'}
                  </li>
                  <li>
                    <strong>Email:</strong> {profile?.email || user?.email}
                  </li>
                  <li>
                    <strong>ID:</strong> {profile?.username || 'Not set'}
                  </li>
                  <li>
                    <strong>Role:</strong>{' '}
                    <span className="capitalize">{profile?.role || 'student'}</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-2 text-foreground">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                    Browse Classes
                  </button>
                  <button className="w-full py-2 px-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enrolled Classes Placeholder */}
          <div className="card p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Your Enrolled Classes</h3>
            <div className="text-center py-12 text-muted-foreground">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
              <p>You haven't enrolled in any classes yet.</p>
              <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Explore Classes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentHomepage;
