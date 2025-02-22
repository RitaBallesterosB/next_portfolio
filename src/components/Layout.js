import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Nprogress  from 'nprogress';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Layout = ({ children, footer = true }) => {

  const router = useRouter();

  useEffect(() => {

    // Efecto para manejar cambios de ruta
    const handleRouteChange = () => {
      Nprogress.start();
    };

    const handleChangeComplete = () => {
      Nprogress.done();
    };

    const handleChangeError = () => {
      Nprogress.done();
    };

    // Escucha el inicio de cambio de ruta
    router.events.on("routeChangeStart", handleRouteChange);

    // Escucha el final exitoso de cambio de ruta
    router.events.on("routeChangeComplete", handleChangeComplete);

    // Escucha el error en el cambio deruta
    router.events.on("routeChangeError", handleChangeError);
    
    return () => {
      // Limpia el event listener al desmontar el componente
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleChangeComplete);
      router.events.off("routeChangeError", handleChangeError);
    };
  }, [router.events]);

  return (
    <>
      <Navbar />

      {children}

      { footer && (
        <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Rita Ballesteros Portfolio</h1>
          <p>Email: <a href="mailto:ritaballesterosba@gmail.com" className="text-light">ritaballesterosba@gmail.com</a></p>
          <p>Cell Phone: <a href="tel:+573023604646" className="text-light">+573023604646</a></p>
          <p> {new Date().getFullYear()} - Bogotá - Colombia</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>
      )}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool
};

export default Layout;