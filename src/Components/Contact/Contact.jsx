import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  return (
    <>
      <section id='contact' className='pt-5'>
        <div className="container pt-5">
      <h1 className='text-center hc pt-5 fs-1 fw-bolder'>CONATCT SECTION</h1>
      <div className='pt-2 pe-2 d-flex justify-content-center align-items-center'>
              <div className='bordc'></div>
              <div className='mx-3'><i className="fa-solid fa-star icon-b"></i></div>
              <div className='bordc'></div>
            </div>
            </div>
        <div className="container containc d-flex justify-content-center align-items-center py-5">
          <div className='w-75 wrapper'>
            <div>
              <div className='input-box'>
                <input
                  type="text"
                  placeholder='userName'
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                />
                <label style={{ opacity: name === '' ? 0 : 1, top: name === '' ? '' : '-5px' }} htmlFor="">userName :</label>
              </div>
              <div className='input-box'>
                <input
                  type="text"
                  placeholder='userAge'
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                />
                <label style={{ opacity: email === '' ? 0 : 1, top: email === '' ? '' : '-5px' }} htmlFor="">userAge :</label>
              </div>
              <div className='input-box'>
                <input
                  type="text"
                  placeholder='userEmail'
                  value={password}
                  onChange={(e) => handleInputChange(e, setPassword)}
                />
                <label style={{ opacity: password === '' ? 0 : 1, top: password === '' ? '' : '-5px' }} htmlFor="">userEmail :</label>
              </div>
              <div className='input-box'>
                <input
                  type="text"
                  placeholder='userPassword'
                  value={repassword}
                  onChange={(e) => handleInputChange(e, setRepassword)}
                />
                <label style={{ opacity: repassword === '' ? 0 : 1, top: repassword === '' ? '' : '-5px' }} htmlFor="">userPassword :</label>
              </div>
              <button className='btn but'>send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}