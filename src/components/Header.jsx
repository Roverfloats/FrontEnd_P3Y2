import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to={{pathname: "/"}} style={{ textDecoration: "none" }}>
          <h1 style={{ color: "white" }}>Beter Buienradar</h1>
        </Link>
      </div>
    </>
  );
}

export default Header;
