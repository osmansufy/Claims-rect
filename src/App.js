import React from 'react';

import './App.css';
import Head from './page/Header'
import Banner from './page/Banner'
import About from './page/About'
import Team from './page/Team'
import Clients from './page/Clients'
import Blog from './page/Blog'
import Contact from './page/Contact'
import Map from './page/Contact'
import Footer from './page/Footer'

function App() {
  return (
    <div className="App">
      
  <Head/>
  <Banner/>
     <About/>
     <Team/>
     <Clients/>
     <Blog/>
     <Contact />
     <Map />
     <Footer />
    </div>
  );
}

export default App;
