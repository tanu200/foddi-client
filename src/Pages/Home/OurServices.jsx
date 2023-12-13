import React from 'react';

const OurServices = () => {
    const serviceList=[
        {id:1, title:'Catering', des:'Delight your guests with our flavors and  presentation', img:'/public/images/home/services/icon1.png'},
        {id:2, title:'Fast delivery', des:'We deliver your order promptly to your door', img:'/public/images/home/services/icon2.png'},
        {id:3, title:'Online Ordering', des:'Explore menu & order with ease using our Online Ordering ', img:'/public/images/home/services/icon3.png'},
        {id:4, title:'Gift Cards', des:'Give the gift of exceptional dining with Foodi Gift Cards', img:'/public/images/home/services/icon4.png'},
        

    ]
    return (
        <div>
              <div  className='flex flex-col md:flex-row justify-between items-center gap-12 space-y-5 my-20 '>
          
            <div className='md:w-1/2 space-y-3'>
            <h4 className='text-xl text-red font-semibold tracking-widest uppercase'>Our Story & Services</h4>
                <h2 className='text-5xl font-bold leading-snug'>Our Culinary Journey And Services</h2>
                <p className='text-secondary font-semibold'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                <button className='btn bg-green text-white px-8 py-4  rounded-full'>Explore</button>
            </div>
            <div className='md:w-1/2'>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                {
                   serviceList.map((service)=>(
                        <div key={service.id} className='shadow-md rounded space-y-2 py-5 px-4 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
                            <img src={service.img} alt="" />
                            <h1 className='font-semibold'>{service.title}</h1>
                            <h1 className='text-[#90BD95]'>{service.des}</h1>

                        </div>
                    ))
                }
               </div>
             
            </div>
           </div>
            
        </div>
    );
};

export default OurServices;