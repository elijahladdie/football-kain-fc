import React, { useEffect, useState } from 'react'
import MatchList from '../../components/admin/MatchList';
import Nav from '../../components/admin/Nav'
import Loading from '../../components/Loading';
import ToggleMatch from '../../components/admin/toggleMatch';
import Auth from '../../components/admin/Auth';



const Matches = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {    
    setTimeout(() => setLoading(false), 300)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div  className='min-h-screen dark:bg-gray-900'>
      <Nav />
      <Auth/>
      
     <ToggleMatch/>
      <MatchList  />
    </div>
  )
}


export default Matches