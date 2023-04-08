import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import Matches from '../components/Matches';
function Match() {
  useEffect(()=>{
    document.title = "Kain FC | Match"
  })
  return (
    <div>
      <Nav />
      <Matches/>
      <Footer/>

    </div>
  );
}

export default Match;
