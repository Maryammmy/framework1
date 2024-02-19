import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Location from "../../Location/Location"
import Footer from "../../Footer/Footer"
import { Outlet } from 'react-router-dom'


export default function Userlayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Location/>
    <Footer/>
    </>
  )
}
