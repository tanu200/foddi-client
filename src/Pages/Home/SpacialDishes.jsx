import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";

const simpleNextArrow=(props)=>{
  const{className, style, onClick}=props;
  return(
    <div className={className} 
    style={{...style, display:"block", background:"red"}}
    onClick={onClick}
    >
Next
    </div>
  )

}
const simplePreviouArrow=(props)=>{
  const{className, style, onClick}=props;
  return(
    <div className={className} 
    style={{...style, display:"block", background:"green"}}
    onClick={onClick}
    >
Back
    </div>
  )
}

const SpacialDishes = () => {
    const[recipes, setRecipes]=useState([]);
    const slider=React.useRef(null);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data =>{
            const specials=data.filter((item)=>item.category=== 'popular')
            setRecipes(specials);
        })
    },[])

    //settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow:<simpleNextArrow></simpleNextArrow>,
        previouArrow:<simplePreviouArrow></simplePreviouArrow>
      };
    return (
        <div className='relative'>
             <div className=' space-y-5 my-20 '>
                <h4 className='text-xl text-red font-semibold tracking-widest uppercase'>Special Dishes</h4>
                <h2 className='text-5xl font-bold leading-snug'>Standout Dishes <br /> From Our Menu</h2>
             
            </div>
            {/* arrow btn */}
            <div className=' md:absolute right-3 top-8'>
             
              <button onClick={()=>slider?.current?.slickPrev()} className='btn p-2 rounded-full ml-5'><FaAngleLeft className='h-8 w-8 p-1'></FaAngleLeft></button>
              <button onClick={()=>slider?.current?.slickNext()}  className='btn p-2 rounded-full ml-5 bg-green text-white'><FaAngleRight className='h-8 w-8 p-1' ></FaAngleRight></button>
            </div>

            <Slider ref={slider} {...settings}>
         {
            recipes.map((item,i)=>(
                <Cards key={i} item={item}></Cards>
            ))
         }
        </Slider>
            
        </div>
    );
};

export default SpacialDishes;