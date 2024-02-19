import React from 'react'
import Navbar from '../Navbar/Navbar'
import error from '../../Assets/images/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif'

export default function Notfound() {
  return (
    <>
    {/* <Navbar/> */}
    <div className='d-flex justify-content-center align-items-center'><img className='pt-5 mt-5' src={error} alt="" /></div>
    </>
  )
}