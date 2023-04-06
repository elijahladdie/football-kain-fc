import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import Empty from './Empty'

function Match() {
  useEffect(()=>{
    document.title = "Kain FC | Match"
  })
  return (
    <div>
      <Nav />
      <Empty/>
      <Footer/>

    </div>
  );
}

export default Match;
