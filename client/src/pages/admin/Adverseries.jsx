import React, { useEffect, useState } from 'react'
import Nav from '../../components/admin/Nav'
import Loading from '../../components/Loading';
import AdverseryList from "../../components/admin/AdvesaryList"
import ToggleAdversery from '../../components/admin/ToggleAdvery';
import Auth from '../../components/admin/Auth';


const Adverseries = () => {
  const [loading, setLoading] = useState(true)
    
  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div  className='min-h-screen dark:bg-gray-900'>
      <Auth/>
      <Nav />
      <span className='w-64'/>
    
      <ToggleAdversery/>
      <AdverseryList/>
    </div>
  )
}


export default Adverseries