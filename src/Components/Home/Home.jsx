import React from 'react'
import './Home.css'
import img1 from "../../Assets/images/avataaars.svg"

export default function Home() {
  return (
    <>
<section id='home' className='pt-5'>
<div className="container p-5  d-flex justify-content-center align-items-center containh text-white">
    <div>
      {/* <div className=' ms-5'><img src={img1} alt=""  width={250} /></div> */}
      <h2 className=' pt-4  fs-1 fw-bolder text-center'>START FRAMEWORK</h2>
      <div className=' pt-3 pe-2 d-flex justify-content-center align-items-center '>
        <div className='bordh'></div>
        <div className='mx-3'><i className="fa-solid fa-star "></i></div>
        <div className='bordh'></div>
      </div>
      <div className='text-center mt-3'>Graphic Artist - Web Designer - Illustrator</div>
    </div>
</div>
</section>
    </>
  )
}