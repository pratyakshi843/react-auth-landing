import "../styles/landing.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Landing = () => {
  const { logout } = useContext(AuthContext);

  // 🌙 Theme state
  const [theme, setTheme] = useState("light");

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="landing-wrapper">
      {/* NAVBAR */}
      <header className="landing-nav">
        <div className="nav-container">
          <h2 className="logo">ReactAuth</h2>

          <div className="nav-actions">
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <h1>Build Secure React Apps Faster</h1>
          <p>
            A modern authentication-based React landing page with protected
            routes and persistent login.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>🔐 Secure Auth</h3>
            <p>Sign up, sign in, and protected routes with session handling.</p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast SPA</h3>
            <p>Single Page Application built using modern React.</p>
          </div>

          <div className="feature-card">
            <h3>📱 Responsive</h3>
            <p>Optimized for desktop, tablet, and mobile devices.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section">
          <h2>What Developers Say</h2>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                “This project helped me understand authentication and protected
                routes clearly.”
              </p>
              <span>— Frontend Developer</span>
            </div>

            <div className="testimonial-card">
              <p>
                “Clean UI, scalable structure, and perfect for portfolios.”
              </p>
              <span>— React Learner</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 ReactAuth. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;