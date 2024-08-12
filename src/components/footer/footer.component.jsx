import FooterLogo from '../../assets/logos/footer-logo.svg';
import LocationIcon from '../../assets/icons/location-footer.svg';
import ClockIcon from '../../assets/icons/clock-footer.svg';
import PhoneIcon from '../../assets/icons/phone-footer.svg';
import EmailIcon from '../../assets/icons/email-footer.svg';

import FooterInfoItem from "./footer-info-item/footer-info-item.component";

import './footer.styles.scss';

// TODO: Mochar el texto para que sea en dos líneas, a los que toque.
const Footer = () => {

  const locationItems = [
    {
      icon: LocationIcon,
      alt: "Icono Ubicación",
      texts: ["Av. 5AN #17-98 OF 701-704", "Edificio Núcleo Profesional"],
    },
    {
      icon: ClockIcon,
      alt: "Icono Reloj",
      texts: ["Lunes a viernes: 6:30 a 4:00 p.m", "Sábados: 7:00 a 10:30 a.m"],
    },
  ];
  const contactItems = [
    {
      icon: PhoneIcon,
      alt: "Icono Teléfono",
      texts: ["Teléfono: (602) 3472282", "Celular: 3172688034"],
    },
    {
      icon: EmailIcon,
      alt: "Icono correo",
      texts: ["comercial@proworking.com.co"],
    }
  ];

  return (
    <div className="footer-container">
      <img src={FooterLogo} alt="Footer Logo" />
      <FooterInfoItem title="Ubicación" itemsInfo={locationItems} />
      <FooterInfoItem title="Contacto" itemsInfo={contactItems} />
    </div>
  );
}

export default Footer;