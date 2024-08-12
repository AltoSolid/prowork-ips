import HeroImage from '../../assets/imgs/Home-img.webp';

import './heroSection.styles.scss';

const HeroSection = () => {
  return (
    <div className='hero-section-container'>
      <img src={HeroImage} alt='Hero section image'/>
      <div className='hero-text'>
        Estamos Comprometidos con el Bienestar de tu empresa
      </div>
    </div>
  );
}

export default HeroSection;