import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>
          Ride<span>Smart</span>
        </h3>
        <p>Your go-to car rental partner across India.</p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
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
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact</h4>
        <p>Email: support@ridesmart.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </footer>
  )
}
