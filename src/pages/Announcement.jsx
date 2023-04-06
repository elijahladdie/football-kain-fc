import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Empty from './Empty';

function Announcement() {
  useEffect(()=>{
    document.title = "Kain FC | Announcement"
  })
  return (
    <div>
      <Nav />
      <Empty/>
      <Footer/>

    </div>
  );
}

export default Announcement;
