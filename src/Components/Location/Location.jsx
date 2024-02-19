import React from 'react'
import './Location.css'
export default function Location() {
  return (
    <>
    <section id='location' className='py-4'>
    <div className="container text-center text-white py-5">
        <div className="row">
            <div className="col-md-4">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
                <h2>AROUND THE WEB</h2>
                <div>
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
                </div>
            </div>
            <div className="col-md-4">
                <h2>ABOUT FREELANCER</h2>
                <p className='prag'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
               
            </div>
            
        </div>
    </div>
    </section>
    </>
  )
}
