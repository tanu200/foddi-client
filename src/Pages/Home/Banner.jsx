import React from 'react';
import banner1 from '../../assets/banner.png';


const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% mt-20'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='w-1/2 space-y-7'>
                    <h1 className='text-6xl font-bold'>Dive into Delights Of Delectable <span className='text-green md:leading-snug leading-snug'>Food</span></h1>
                    <p className='text-secondary'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <button className='btn bg-green text-white rounded-full font-semibold'>Order Now</button>

                </div>
                <div className='w-1/2'>
                    <img src={banner1} alt="" />
                    <div className='flex flex-col md:flex-row justify-around items-center -mt-14 gap-4 ' >
                        <div className='flex hidden md:flex bg-white py-2 px-3 rounded-xl gap-3 shadow-md w-64'>
                            <img src='/src/assets/b-food1.png' alt="" className='rounded-2xl' />
                            <div>
                                <h3 className='text-xl font-medium'>Spicy noodles</h3>
                               
                                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
</div>
                               <p className='text-red'>$18.00</p>
                            </div>
                        </div>
                        <div className='flex hidden md:flex bg-white py-2 px-3 rounded-xl gap-3 shadow-md w-64'>
                            <img src='/src/assets/b-food1.png' alt="" className='rounded-2xl' />
                            <div>
                                <h3 className='text-xl font-medium'>Spicy noodles</h3>
                               
                                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"readOnly />
</div>
                               <p className='text-red'>$18.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;