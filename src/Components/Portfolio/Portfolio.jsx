import React, { useState } from 'react';
import img1 from '../../Assets/images/poert1.png';
import img2 from '../../Assets/images/port2.png';
import img3 from '../../Assets/images/port3.png';
import './Portfolio.css';

export default function Portfolio() {
  const [images] = useState([img1, img2, img3, img1, img2, img3]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setModalVisible(true);
    console.log('Image clicked:', index);
   
    console.log('Selected Image Path:', images[index]);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    setModalVisible(false);
    console.log('Closing image');
  };
  console.log('Render Portfolio component');

  return (
    <>
      <section id='portfolio' className='pt-5 '>
        <div className="container text-center pt-5 mt-5 ">
          <div>
            <h1 className='fs-1 fw-bolder h' >PORTFOLIO COMPONENT</h1>
            <div className='pt-2 pe-2 d-flex justify-content-center align-items-center  '>
              <div className='bordp'></div>
              <div className='mx-3'><i className="fa-solid fa-star icon-bg "></i></div>
              <div className='bordp'></div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row gy-5">
              {images.map((val, index) => (
                <div className="col-md-4" key={index}>
                  <div className='item position-relative rounded-3 overflow-hidden' onClick={() => handleImageClick(index)}>
                    <div> <img className='w-100' src={val} alt="" /></div>
                    <div className="layer position-absolute d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {modalVisible && (
        <div className="modal visible  bg-opacity-25  h-100 bg-primary" onClick={handleCloseImage}>
          {console.log('Modal Visible:', modalVisible)  } 
          
          {console.log('Render Modal Content:', selectedImage)}

            {console.log('Render Modal Content')} 
            <span className="close" onClick={handleCloseImage}>&times;</span>
            <img className='pt-5 ' src={selectedImage}width={600} height={500} alt="Selected Image" />
            {console.log('Selected Image:', selectedImage)}
          </div>
        
      )}
        </div>
      </section>
    </>
  );
}