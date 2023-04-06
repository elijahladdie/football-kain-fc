import React,{useEffect} from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav'
import Empty from './Empty';

function Projects() {
  useEffect(()=>{
    document.title = "Kain FC | Projects"
  })
  return (
    <div>
      <Nav />
      <Empty/>
      <Footer/>

    </div>
  );
}

export default Projects;
