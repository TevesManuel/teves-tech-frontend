import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import tvsBanner from './../../assets/banner.svg';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={tvsBanner} alt="Teves Tech Logo" style={{ width: "12rem" }} />
        </div>

        {/* Botón Hamburguesa */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li className='li-nav-links'><a href="#home" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li className='li-nav-links'><a href="#services" onClick={() => setIsOpen(false)}>Servicios</a></li>
          <li className='li-nav-links'><a href="#solutions" onClick={() => setIsOpen(false)}>Soluciones</a></li>
          <li className='li-nav-links'><a href="#about" onClick={() => setIsOpen(false)}>Acerca de</a></li>
          <li className='li-nav-links'><a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;