import { Link } from "react-router-dom";
import "./header.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  // Function to handle logout
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear the authentication token
    localStorage.removeItem("tokenAuth");
    localStorage.removeItem("loggedUser");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-n">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="https://camo.githubusercontent.com/8ff1c7d9fce6178429f1883818dd8df4257763fe6c1be6f46ed49387b268c6cd/68747470733a2f2f617368616c6c656e64657369676e2e636f2e756b2f696d616765732f637573746f6d2f73686f72742d75726c2d6c6f676f2e706e67"
            alt="logo"
            style={{ width: "10rem" }}
          />
        </Link>

        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark mx-4 fs-3"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              style={{ textDecoration: "none" }}
              className="text-dark  fs-3"
              to="/dashboard-url"
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="text-dark mx-4 fs-3" to="/login">
              <i class="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item">
            <Link
              to="/login"
              className="fs-3 text-dark"
              onClick={handleLogout}
            >
              <i class="fa-solid fa-power-off "></i>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              variant="link"
              className="logout-icon  fs-4 mx-4  text-white"
              
            >
              <i class="fa-solid fa-power-off"></i>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
