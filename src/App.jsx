import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import Auth from '@/pages/Auth';
import VerifyEmail from '@/pages/VerifyEmail';
import AuthCallback from '@/pages/AuthCallback';
import StudentHomepage from '@/pages/StudentHomepage';
import './App.css';

// Simple Landing Page Component
const LandingPage = () => {
  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">🎵 Music Academy</h1>
        <div className="menu">
          <span>Home</span>
          <span>Music Classes</span>
          <span>About</span>
          <span>Testimonials</span>
          <span>Achievements</span>
          <span>Contact Us</span>
          <a href="/auth" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            Login
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p>Offline & Online Classes Available</p>
          <h1>Master the Art of Music</h1>
          <input
            type="text"
            placeholder="Search for classes..."
            className="w-full max-w-md p-3 rounded-lg border-none text-black mb-4"
          />
          <button className="cta-btn">Explore Classes</button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section">
        <h2 className="section-title">Welcome to Music Academy</h2>
        <p className="text-muted-foreground max-w-2xl">
          Discover your musical potential with our expert tutors. Whether you're a beginner or looking to refine your skills, we have the perfect class for you.
        </p>
      </section>

      {/* Classes Grid */}
      <section className="section">
        <h2 className="section-title">Popular Classes</h2>
        <div className="grid">
          {[
            { title: 'Guitar Basics', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400', price: '₹2,500/month', timing: 'Mon, Wed, Fri - 4:00 PM', instructor: 'Raj Kumar' },
            { title: 'Piano Masterclass', img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400', price: '₹3,000/month', timing: 'Tue, Thu - 5:00 PM', instructor: 'Priya Sharma' },
            { title: 'Vocal Training', img: 'https://images.unsplash.com/photo-1516280440614-37f17c4e0f09?w=400', price: '₹2,000/month', timing: 'Sat, Sun - 10:00 AM', instructor: 'Anita Desai' },
          ].map((item, i) => (
            <div className="card" key={i}>
              <img src={item.img} alt={item.title} />
              <div className="card-body">
                <h4>{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.price}</p>
                <div className="flex gap-2">
                  <button className="card-btn flex-1">Enroll Now</button>
                  <button className="card-btn-secondary flex-1">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Music Academy. All rights reserved.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route
            path="/student-homepage"
            element={
              <ProtectedRoute>
                <StudentHomepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
