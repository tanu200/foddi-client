import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   <img src={logo} alt=""  />
    <p>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
  </aside> 
  <nav>
    <header className=" text-black text-xl font-bold">Useful links</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Events</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">FAQ</a>
  </nav> 
  <nav>
    <header className=" text-black text-xl font-bold">Main Menu</header> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Offers</a>
    <a className="link link-hover">Menus</a>
    <a className="link link-hover">Reservation</a>
  </nav> 
  <nav>
    <header className=" text-black text-xl font-bold">Contact Us</header> 
    <a className="link link-hover">example@email.com</a>
    <a className="link link-hover">+64 958 248 966</a>
    <a className="link link-hover">Social media</a>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;