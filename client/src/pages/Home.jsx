import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Player from '../components/Player';

function Home() {
  useEffect(()=>{
    document.title = "Kain FC | Home"
  })
  return (
    <div>
      <Header />
      <Player/>
      <Footer/>

    </div>
  );
}

export default Home;
