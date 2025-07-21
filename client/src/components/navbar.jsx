import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Ride<span>Smart</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Browse Cars</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <a href="#" className="login-btn">
          Login / Sign Up
        </a>
        <a href="#" className="book-btn">
          Book a Ride
        </a>
      </div>
    </nav>
  )
}
