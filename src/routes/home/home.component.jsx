import HeroSection from '../../components/heroSection/heroSection.component';
import OurServices from '../../components/ourServices/ourServices.component';
import HighlightedServices from '../../components/highlightedServices/highlightedServices.component';

import './home.styles.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <HeroSection />
      <OurServices />
      <HighlightedServices />
    </div>
  );
}

export default Home;