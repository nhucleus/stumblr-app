import "./SplashPage.css";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="splash-content">
      <div className="splash-title">
        stumblr
      </div>
      <div className="splash-slogan">
        Where users stumble upon posts
      </div>
      <div className="splash-links">
          <Link to="/signup">
            <button className="auth-btn">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;