import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";

const Cards = ({item}) => {
    const{_id,image,name,recipe,price}=item;
    const[isHeartedFilted, setHeartFilted]=useState(false);
    const handleHeartClick=()=>{
      setHeartFilted(!isHeartedFilted)
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl relative p-4">
              <div onClick={handleHeartClick}
               className={`rating gap-1 absolute right-2 top-2 p-2  bg-green ${isHeartedFilted?'text-rose-500':'text-white'}`}>
              <IoMdHeart className='w-5 h-5 cursor-pointer'></IoMdHeart>
              </div>
              <Link to={`/menu/${_id}`}>
              <figure><img src={image} alt="Shoes" className='hover:scale-105 transition-all duration-200 h-72 ' /></figure>
              </Link>

  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Description of the item</p>
    <div className="card-actions justify-end">
    <p className='text-red'>{price}</p>
    <button className="btn bg-green text-white">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;