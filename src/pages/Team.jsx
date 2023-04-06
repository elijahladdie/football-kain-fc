import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import Empty from './Empty';

function Team() {
  useEffect(()=>{
    document.title = "Kain FC | Team"
  })
  return (
    <div>
      <Nav />
      <Empty/>
      <Footer/>

    </div>
  );
}

export default Team;
