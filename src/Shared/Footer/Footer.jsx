import React from 'react';
import footerLogo from "../../../public/Group 36.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <footer className="footer grid border-b-blue-400 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  container p-10  text-base-content">

        <div >
            <img className='text-[#07332F]' src={footerLogo} alt="" />
    <p className='text-lg text-[#6C6B6B]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.</p>
    <button className='primary_btn'>Appointment</button>
  </div> 
  <div>
    <span className="footer_title">Quick Links</span>
    <Link className='footer_link'>About Us</Link> 
    <Link className='footer_link'>Service</Link> 
    <Link className='footer_link'>Doctors</Link> 
    <Link className='footer_link'>Departments</Link> 
    <Link className='footer_link'>Online Payment</Link> 
    <Link className='footer_link'>Contact Us</Link> 
    <Link className='footer_link'>My Account</Link> 
  </div> 
  <div>
    <span className="footer_title">Doc House Services</span> 
    <Link className='footer_link'>Pediatric Clinic</Link> 
    <Link className='footer_link'>Diagnosis Clinic</Link> 
    <Link className='footer_link'>Cardiac Clinic</Link> 
    <Link className='footer_link'>Laboratory Analysis</Link> 
    <Link className='footer_link'>Gynecological Clinic</Link> 
    <Link className='footer_link'>Personal Counseling</Link> 
    <Link className='footer_link'>Dental Clinic</Link> 
  </div> 
  <div>
  <Link className='footer_title'>Pediatric Clinic</Link> 
    <Link className='footer_link'>Monday - 10 am to 7 pm</Link> 
    <Link className='footer_link'>Tuesday - 10 am to 7 pm</Link> 
    <Link className='footer_link'>Wednesday - 10 am to 7 pm</Link> 
    <Link className='footer_link'>Thursday - 10 am to 7 pm</Link> 
    <Link className='footer_link'>Friday - 10 am to 7 pm</Link> 
    <Link className='footer_link'>Saturday - 10 am to 7 pm</Link> 
    <Link className='footer_link'>Sunday - 10 am to 7 pm</Link> 
  </div>
     
</footer>

  <span className='flex justify-center py-6 text-lg shadow-md border-t-2 text-[#6C6B6B]'>Copyright © 2022 - All right reserved by Doc House Ltd</span>
        </div>
    );
};

export default Footer;