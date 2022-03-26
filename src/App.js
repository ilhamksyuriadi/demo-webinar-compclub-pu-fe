import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  useEffect(() => {
    axios.get('http://localhost:3001/get-all-blog').then(res=> {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div>
      <Header />
      {/* <About /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
