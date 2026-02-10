import { h } from 'preact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id='footer'>
      <div className="container footer-grid">
        {/* Columna 1: Contacto */}
        <div className="footer-column">
          <h4 className="footer-title">CONTACT</h4>
          <ul className="footer-links">
            <li><i className="icon-phone"></i><a href="https://tvs.ar/wsp">+54 221 305-8662</a></li>
            <li><i className="icon-mail"></i><a href="mailto:contacto@tvs.ar">contacto@tvs.ar</a></li>
            <li><i className="icon-map"></i> La Plata, Buenos Aires, Argentina</li>
          </ul>
        </div>

        {/* Columna 2: Social Media */}
        <div className="footer-column">
          <h4 className="footer-title">SOCIAL MEDIA</h4>
          <ul className="footer-links">
            <li><a href="https://www.linkedin.com/in/manuel-teves/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/teves_tech/">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Teves Tech. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// {/* Columna 3: Newsletter */}
// <div className="footer-column newsletter">
//   <h4 className="footer-title">NEWSLETTER</h4>
//   <p>Sign up for our newsletter and digital updates.</p>
//   <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
//     <input type="email" placeholder="Email address" />
//     <button type="submit">Sign Up</button>
//   </form>
// </div>