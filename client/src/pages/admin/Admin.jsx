import React, { useEffect, useState } from 'react'
import MatchList from '../../components/admin/MatchList';
import Nav from '../../components/admin/Nav'
import Loading from '../../components/Loading';
import Form from '../../components/admin/Form';
import Dashboard from '../../components/admin/Dashboard';


const Admin = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div  className='h-screen dark:bg-gray-900'>
      <Nav />
      <span className='w-64'/>
      {/* <MatchList  /> */}
      {/* <Form /> */}
      <Dashboard/>
    </div>
  )
}


export default Admin