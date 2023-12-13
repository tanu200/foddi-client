import { iterate } from 'localforage';
import React from 'react';


const categoryItems=[
    {id:1, title:'Main Dish', des:'(86 dishes)', images:'https://i.postimg.cc/PrbkqpHb/img1.png'},
    {id:2, title:'Break Fast', des:'(12 break fast)', images:'https://i.postimg.cc/HLnG36y3/img2.png'},
    {id:3, title:'Dessert', des:'(48 dessert)', images:'https://i.postimg.cc/dtYzgsCh/img3.png'},
    {id:4, title:'Browse All', des:'(255 Items)', images:'https://i.postimg.cc/6pHg7CmZ/img4.png'},
]

const Categories = () => {
    return (
        <div className='mt-20 '>
            <div className='text-center space-y-5'>
                <h4 className='text-xl text-red font-semibold tracking-widest uppercase'>Customer Favorites</h4>
                <h2 className='text-5xl font-bold leading-snug'>Popular Catagories</h2>
             
            </div>
            {/* catagory card */}
            <div className='flex flex-col md:flex-row justify-around items-center mt-20 gap-8'>
               {
                categoryItems.map((item,i)=>(
                    <div key={i} className='shadow-2xl rounded-lg bg-slate-50 p-6 w-72 mx-auto text-center hover:-translate-y-4 transition-all duration-300 '>
                      
                           <div className='flex mx-auto w-full justify-center'>
                           <img src={item.images} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-24 h-24' />
                           </div>
                           <div className='mt-3 space-y-2'>
                           <h1 className='text-xl font-semibold'>{item.title}</h1>
                            <p>{item.des}</p>
                           </div>
                     

                    </div>
                ))
               }
            </div>
            
        </div>
    );
};

export default Categories;