import React, { useEffect, useState } from 'react'
import Nav from '../../components/admin/Nav'
import Loading from '../../components/Loading';
import Dashboard from '../../components/admin/Dashboard';
import Auth from '../../components/admin/Auth';


const Admin = () => {
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
      <Dashboard/>
    </div>
  )
}


export default Admin