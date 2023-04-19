import React, { useEffect, useState } from 'react'
import Nav from '../../components/admin/Nav'
import Loading from '../../components/Loading';
import Form from '../../components/admin/Form';


const ShowForm = () => {
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
      <span className='w-64'/>
      <Form  />
    </div>
  )
}


export default ShowForm