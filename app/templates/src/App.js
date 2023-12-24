import React from 'react';
 import Navibar from './navbar';
import MainContent from './maincontent';
import Footer from './footer';
import { Route,Routes} from 'react-router-dom';
import About from './About';
import Error from './Error';
import HowItWorks from "./HowItWorks"
import Fertilizer from './fertilizer';
import Crop from './crop';
import Disease from './disease';
function App() {
  return (<>
   <Navibar />
 <Routes>
  <Route exact path='/' element={<MainContent/>} />  
  <Route exact path='/aboutus' element={<About/>} /> 
  <Route exact path='/fertilizer' element={<Fertilizer/>} /> 
  <Route exact path='/crop' element={<Crop/>} /> 
  <Route exact path='/disease' element={<Disease/>} /> 

  <Route exact path='/how-it-works' element={<HowItWorks/>} /> 

  <Route path="*" element={<Error/>} />

</Routes>
   <Footer />
</>
  );
}

export default App;
