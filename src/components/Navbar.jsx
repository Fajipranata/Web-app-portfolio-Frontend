import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Portfolio Web App</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/mystory">My Story</Link>
        </div>
    </nav>
  )
}

export default Navbar
