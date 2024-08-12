import CronometerIcon from '../../assets/icons/cronografo.png';
import AmbulanceIcon from '../../assets/icons/ambulancia.png';
import CertificateIcon from '../../assets/icons/certificado-medico.png';
import CloudIcon from '../../assets/icons/acceso-a-la-nube.png';

import HighlightedService from './highlightedService/highlightedService.component';

import './highlightedServices.styles.scss';

const HighlightedServices = () => {

  const highlightedServices = [
    {
      icon: CronometerIcon,
      alt: "Icono de Cronometro",
      text: "Tiempos de espera de máximo 2 horas",
    },
    {
      icon: AmbulanceIcon,
      alt: "Icono de Ambulancia",
      text: "Unidad móvil Ocupacional",
    },
    {
      icon: CertificateIcon,
      alt: "Icono de Certificado médico",
      text: "Entrega de certificados el mismo día de atención",
    },
    {
      icon: CloudIcon,
      alt: "Icono de acceso a la nube",
      text: "Accesos a Software especializado para descarga de certificados e informes",
    }
  ]

  return (
    <div className="highlighted-services">
      <div className="highlighted-services-card">
        {highlightedServices.map((service, index) => (
          <HighlightedService
            icon={service.icon}
            alt={service.alt}
            text={service.text}
            key={index}
            className="highlighted-service"
          />
        ))}
      </div>
    </div>
  );
}

export default HighlightedServices;