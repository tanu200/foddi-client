import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

import { FaUser } from "react-icons/fa";
import Modal from '../components/Modal';

const Navbar = () => {

    const navItems=<>
     <li><a href='/'>Home</a></li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li><a href='/menu'>All</a></li>
            <li><a>Salad</a></li>
            <li><a>Pizza</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Online Order</a></li>
            <li><a>Table Booking</a></li>
            <li><a>Order Tracking</a></li>
          </ul>
        </details>
      </li>
      <li><a>Offers</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100  fixed top-0 left-0 right-0 shadow-md">
  <div className='navbar-start'>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img src={logo} alt="" />

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navItems
      }
      
    </ul>
  </div>
  <div className="navbar-end">

  <button className="btn btn-ghost btn-circle hidden lg:flex">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
 
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-4 hidden lg:flex">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
{/* login button */}
    <button 
    onClick={()=>document.getElementById('my_modal_3').showModal()} 
    className="btn bg-green rounded-full px-6 text-white gap-2"><FaUser></FaUser>Login</button>

<Modal></Modal>
  </div>
</div>
        </div>
    );
};

export default Navbar;