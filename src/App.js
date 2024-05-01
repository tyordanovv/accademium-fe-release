import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import OrientationSurvey from './pages/OrientationSurvey';

const App = () => {


  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<HeroSection />}/>
          {/* <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/> */}
          <Route exact path='/survey' element={<OrientationSurvey />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;