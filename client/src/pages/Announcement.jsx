import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Empty from '../components/Empty';
import Announcements from '../components/Announcement';

function Announcement() {
  useEffect(()=>{
    document.title = "Kain FC | Announcement"
  })
  return (
    <div>
      <Nav />
      <Announcements page={"Announcements"}/>
      <Footer/>

    </div>
  );
}

export default Announcement;
