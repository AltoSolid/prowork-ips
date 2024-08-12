import HeroSection from '../../components/heroSection/heroSection.component';
import OurServices from '../../components/ourServices/ourServices.component';
import HighlightedServices from '../../components/highlightedServices/highlightedServices.component';
import Clients from '../../components/clients/clients.component';
import OurLocation from '../../components/ourLocation/ourLocation.component';
import ContactForm from '../../components/contactForm/contactForm.component';

import './home.styles.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <HeroSection />
      <OurServices />
      <HighlightedServices />
      <Clients />
      <OurLocation />
      <ContactForm />
    </div>
  );
}

export default Home;