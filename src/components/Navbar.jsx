import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (token exists)
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    setIsAuthenticated(false); // Update authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="TeleMind.png" alt="logo" />
        </Link>
      </div>

       {/* Hamburger Icon - Visible only on mobile */}
       <div 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </div>


      <div className={`navoption ${isOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>

          {!isAuthenticated ? (
            <div className="login-signup">
              <li><Link to="/login">Login | SignUp</Link></li>
            </div>
          ) : (
            <>
              <div className="usericon">
                <li>
                <Link to="/profile/me" onClick={() => setIsOpen(false)}>
                    <img src="user.png" className="user-icon-img" alt="User" />
                  </Link>
                </li>
              </div>

              <div className="logout">
                <li>
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </li>
              </div>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;