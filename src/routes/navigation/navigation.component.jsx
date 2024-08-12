import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar.component';
import Footer from '../../components/footer/footer.component';

import HeaderLogo from '../../assets/logos/header-logo.svg';

import { FloatingWhatsApp } from 'react-floating-whatsapp';


import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <NavBar />
      <FloatingWhatsApp
        phoneNumber="573172688034"
        accountName="Pro working"
        allowEsc
        allowClickAway
        avatar={HeaderLogo}
        statusMessage='Normalmente responde en 1 hora'
        chatMessage="👋 ¡Hola! Gracias por contactar con Pro Working! ¿En qué podemos ayudarte?"
        placeholder='Escribe un mensaje'
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigation;