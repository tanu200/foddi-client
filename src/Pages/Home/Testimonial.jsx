import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Testimonial = () => {
    return (
        <div>
           <div  className='flex flex-col md:flex-row justify-between items-center gap-12 space-y-5 my-20 '>
           <div className='md:w-1/2'>
               <img src="/public/images/home/testimonials/testimonials.png" alt=""  />
             
            </div>
            <div className='md:w-1/2 space-y-3'>
            <h4 className='text-xl text-red font-semibold tracking-widest uppercase'>Testimonials</h4>
                <h2 className='text-5xl font-bold leading-snug'>What Our Customers Say About Us</h2>
                <p className='text-secondary font-semibold'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

                <div className='flex flex-wrap items-center space-y-4'>
                    <div>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="/public/images/home/testimonials/testimonial1.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="/public/images/home/testimonials/testimonial2.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="/public/images/home/testimonials/testimonial3.png" />
    </div>
  </div>
 
</div>
                    </div>
                    <div className='mx-7'>
                        <h3 className='text-xl font-bold'>Customer Feedback</h3>
                      <div className='flex justify-around items-center'>
                      <FaStar className='text-yellow-500'></FaStar>
                      <span className='font-bold'>$4.9</span>
                      <h6 className='text-secondary'>(18.6k Reviews)</h6>
                      </div>
                    </div>
                </div>

            </div>
           </div>
            
        </div>
    );
};

export default Testimonial;