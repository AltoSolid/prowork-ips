import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import CompanyPortal from './routes/companyPortal/companyPortal.component';

import './App.scss';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='company-portal'element={<CompanyPortal />}/>
      </Route>
    </Routes>
  );
}

export default App;
