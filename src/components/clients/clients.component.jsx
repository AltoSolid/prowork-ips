import GroupImage from '../../assets/imgs/clients-group-img.svg';
import Client1 from '../../assets/imgs/client1-img.webp';
import Client2 from '../../assets/imgs/client2-img.webp';
import Client3 from '../../assets/imgs/client3-img.webp';

import './clients.styles.scss';

const Clients = () => {
  return (
    <div className="clients-container">
      <img src={GroupImage} alt="Clients images" className="group-image" />
      
      <div className="individual-images">
        <img src={Client1} alt="Client 1" />
        <img src={Client2} alt="Client 2" />
        <img src={Client3} alt="Client 3" />
      </div>
      
      <div className="clients-text">
        <p>
          Nuestra vasta experiencia y dedicación nos convierten en su aliado confiable en la gestión de la 
          Seguridad y Salud en el  Trabajo. Contamos con un equipo de trabajo multidisciplinario especializado 
          y red de cobertura nacional.
        </p>
      </div>
    </div>
  );
}

export default Clients;
