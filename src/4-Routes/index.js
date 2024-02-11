import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from '../6-Views/0ErrorPage/ErrorPage'
import Home from '../6-Views/1Home/Home'
import About from '../6-Views/2About/About'
import Services from '../6-Views/3Services/Services'
import ServiceBooking from '../6-Views/4ServiceBooking/ServiceBooking'
import Contact from '../6-Views/5Contact/Contact'
import ApplicationUpload from '../6-Views/6ApplicationUpload/ApplicationUpload'
const AllRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route exact path="/about" element={<About />} errorElement={<ErrorPage />} />
        <Route exact path="/services" element={<Services />} errorElement={<ErrorPage />} />
        <Route exact path="/joinus" element={<ServiceBooking />} errorElement={<ErrorPage />} />
        <Route exact path="/contact" element={<Contact />} errorElement={<ErrorPage />} />
        <Route exact path="/applications" element={<ApplicationUpload />} errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes