import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import TeamPlayers from '../components/TeamPlayers';


function Team() {
  useEffect(()=>{
    document.title = "Kain FC | Team"
  })
  return (
    <div>
      <Nav />
      <TeamPlayers />

      <Footer/>

    </div>
  );
}

export default Team;
