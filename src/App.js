import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import {Header} from './components/Header/Header';
import { Events } from './components/Pages/Events/Events';
import {Home} from './components/Pages/Home/Home';
import {About} from './components/Pages/About/About'
import {Services} from './components/Pages/Services/Services'
import {Contact} from './components/Pages/Contact/Contact'
import { Details } from './components/Pages/Details/Details';
import { Footer } from './components/Footer/Footer';


function App() {

  const [darkmode,setdarkmode] = useState(false);

  const  [data,setdata] = useState({});
  const getData = (Data) =>{
    setdata(Data)
  }

  return (
    <div className="App" style={darkmode?{background:"linear-gradient(315deg, rgba(34,185,252,1) 10%, rgba(4,117,4,1) 83%)"}:{backgroundColor:"transparent"}}>
    
      <Header set={setdarkmode} darkmode={darkmode}/>

      <Routes>
  <Route path='/' element={<Home mode={darkmode} />}/>
  <Route path='/events' element={<Events getData={getData}/>}/>
  <Route path='/services' element={<Services mode={darkmode} getData={getData}/>}/>
  <Route path='/about' element={<About mode={darkmode}/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/details' element={<Details mode={darkmode} data={data}/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
