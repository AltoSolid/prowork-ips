import placeIcon from '../../assets/icons/location-2.svg';

import './ourLocation.styles.scss';

const OurLocation = () => {
  return (
    <div className="our-location">
      <div className="our-location-title-container">
        <h3 className='out-location-title'>Nuestra Sede</h3>
        <img src={placeIcon} alt="Icono de sede" className='our-location-icon'/>
      </div>
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/cOhbL_PAG1s"
          allowFullScreen={true}
        >
        </iframe>
      </div>
    </div>
  );
}

export default OurLocation;
