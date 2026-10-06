import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../landing-page/landing.css';

const PHONE_TEL = '+919000975046';

export default function LandingThankYou() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Thank You | Casa Associates';
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="lp">
      <div className="thankyou">
        <div className="thankyou-card">
          <div className="thankyou-icon">✓</div>
          <h1>Thank You!</h1>
          <p>We have received your details. Our team will call you back within a few hours.</p>
          <div className="thankyou-actions">
            <Link to="/landing-page" className="btn btn-primary">Back to Home</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-outline-dark">Call Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
