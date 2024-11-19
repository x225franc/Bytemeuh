import React from 'react';
import { Routes, Route} from 'react-router-dom';

import './App.css';
import './css/responsive.css';
import './css/style.css';

import Home from './Home';
import About from './About'; 
import Project from './Project';
import Activities from './Activities';
import Contact from './Contact';
import NotFound from './notfound';

import Aiplusfarm from './Aiplusfarm';
import Cowsurveillance from './Cowsurveillance';
import Milkoptimization from './Milkoptimization';
import Carbonreduce from './Carbonreduce';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/aiplusfarm" element={<Aiplusfarm />} />
          <Route path="/cowsurveillance" element={<Cowsurveillance />} />
          <Route path="/milkoptimization" element={<Milkoptimization />} />
          <Route path="/carbonreduce" element={<Carbonreduce />} />

        </Routes>
    </div>
  );
}

export default App;