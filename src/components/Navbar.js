import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  // 1️⃣ Cierra el menú si cambias de ruta
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // 2️⃣ Evita scroll en fondo si el menú hamburguesa está abierto
  useEffect(() => {
    if (expandNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandNavbar]);

  // 3️⃣ Navbar sticky que desaparece al hacer scroll (pero no cuando el menú está abierto)
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (expandNavbar) return; // ⛔️ No escondas el navbar si está expandido

      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expandNavbar]); // 👈 Lo agregamos aquí también

  return (

    <div className={`navbar ${showNavbar ? 'show' : 'hide'}`} id={expandNavbar ? 'open' : 'close'}>
        
        <div className="toggleButton">

       
            <div className="logoName">
            
                <h2> <span>M</span>m{`>`}gno</h2>
           
            </div>
       
      
            <button 
            className={`hamburger ${expandNavbar ? 'active' : ''}`}
            onClick={() => setExpandNavbar((prev) => !prev)}
            >
            <span></span>
            <span></span>
            <span></span>
            </button>

          

        </div>
        
        <div className="links">
            <Link to="/"> Inicio </Link>
            <Link to="/opciones"> Proyectos </Link>
            <Link to="/experiencia"> Experiencia </Link>
            <Link to="/blog"> Blog </Link>
        </div>
    </div>
  )
}

export default Navbar