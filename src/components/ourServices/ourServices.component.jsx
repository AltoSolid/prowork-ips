import ExamenIcon from '../../assets/icons/exam-icon.svg';
import MusicIcon from '../../assets/icons/music-therapy-icon.svg';
import MonitorIcon from '../../assets/icons/electrocardiogram-icon.svg';
import BrainIcon from '../../assets/icons/mental-health-icon.svg';
import MicroscopeIcon from '../../assets/icons/microscope-icon.svg';
import EyeExamIcon from '../../assets/icons/eye-exam-icon.svg';
import SpirometryIcon from '../../assets/icons/spirometry-icon.svg';
import ConsultationIcon from '../../assets/icons/consultation-icon.svg';

import ServicesItem from './servicesItem/servicesItem.component';

import './ourServices.styles.scss';

const OurServices = () => {

  const servicesInfo = [
    {
      icon: ExamenIcon,
      alt: "Icono de examen",
      text: "Examen médico Ocupacional",
    },
    {
      icon: MusicIcon,
      alt: "Icono de audiometría",
      text: "Audiometria",
    },
    {
      icon: MonitorIcon,
      alt: "Icono de electrocardiograma",
      text: "Electrocardiograma",
    },
    {
      icon: BrainIcon,
      alt: "Icono de psicología",
      text: "Psicología",
    },
    {
      icon: MicroscopeIcon,
      alt: "Icono de microscopio",
      text: "Laboratorio clínico",
    },
    {
      icon: EyeExamIcon,
      alt: "Icono de optometría",
      text: "Optometría",
    },
    {
      icon: SpirometryIcon,
      alt: "Icono de espirometría",
      text: "Espirometría",
    },
    {
      icon: ConsultationIcon,
      alt: "Icono de asesoría",
      text: "Asesoría SST",
    },
  ];

  return (
    <div className="our-services-container">
      <h3 className="our-services-title">Nuestros Servicios</h3>
      <div className='our-services-group'>
        {servicesInfo.map((service, index) => (
          <ServicesItem 
            icon={service.icon} 
            text={service.text} 
            alt={service.alt} 
            key={index}
            className="our-services-item"
          />
        ))}
      </div>
    </div>
  );
}

export default OurServices;