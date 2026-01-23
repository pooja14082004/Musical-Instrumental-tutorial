import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail: React.FC = () => {
  return (
    <div className="verify-container">
      <svg
        className="verify-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      
      <h1 className="verify-title">Check Your Email</h1>
      
      <p className="verify-text">
        We've sent a verification link to your email address. 
        Please click the link in the email to verify your account and access your dashboard.
      </p>
      
      <p className="verify-text" style={{ marginTop: '24px', fontSize: '14px' }}>
        Didn't receive the email? Check your spam folder or{' '}
        <Link to="/auth" className="auth-link">
          try again
        </Link>
      </p>
    </div>
  );
};

export default VerifyEmail;
