import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar main-nav bg-primary">
          <Link to="/">
            <h3>Github API</h3>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
