import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar.component';
import Footer from '../../components/footer/footer.component';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation-container'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigation;