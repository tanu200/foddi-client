import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import Cards from '../Home/Cards';

const Menu = () => {
    const[menu,setMenu]=useState([]);
    const[filterItems, setFilterItems]=useState([]);
    const[selectCategory, setSeleccategory]=useState('all');
    const[sortOption, setSortOption]=useState('default');
    const[currentPage, setCurrentPage]=useState(1);
    const[itemParPage]=useState(9);

    //data load
    useEffect(()=>{
        //fetch data
        const fetchData = async()=>{
            try{
                const response=await fetch('/menu.json');
                const data= await response.json();
                setMenu(data);
                setFilterItems(data);
            }
            catch(error){
                console.log('Error Fatching Data',error)
            }

        };
        fetchData();
    },[])
    //filtering data base on category
    const filterdItems =(category)=>{
        const filtered = category ==='all'?menu : 
        menu.filter((item)=>item.category === category);
        setFilterItems(filtered);
        setSeleccategory(category);
        setCurrentPage(1);
    };
    //show all data function
    const showAll =()=>{
        setFilterItems(menu);
        setSeleccategory('all');
        setCurrentPage(1)
    }
    //sorting base on a-z, z-a, high to low, low to high
    const handleSortChange=(option)=>{
        setSortOption(option);
    let sortedItems=[...filterItems];

    //logic
    switch(option) {
        case "A-Z":
         sortedItems.sort((a, b)=>a.name.localeCompare(b.name))
          break;
        case 'Z-A':
            sortedItems.sort((a, b)=>b.name.localeCompare(a.name))
          break;
          case 'low-to-high':
            sortedItems.sort((a, b)=>a.price - b.price)
          break;
          case 'high-to-low':
            sortedItems.sort((a, b)=>b.price - a.price)
          break;
        default:
        break;
      }
      setFilterItems(sortedItems)
      setCurrentPage(1)
    }
    //pagination
    const indexOfLastItems=currentPage * itemParPage;
    const indexOfFirstItems= indexOfLastItems - itemParPage;
    const currentItems= filterItems.slice(indexOfFirstItems,indexOfLastItems );
    const pagination =(pageNumber)=>setCurrentPage(pageNumber);

    return (
        <div>
            {/* menu banner */}
            <div className='bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% mt-20'>
            <div className='py-48 '>
                <div className='text-center space-y-7'>
                    <h1 className='text-6xl font-bold'>For The Love Of Delicious <span className='text-green md:leading-snug leading-snug'>Food</span></h1>
                    <p className='text-secondary md:w-4/5 mx-auto'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship. Food, substance consisting of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital</p>
                    <button className='btn bg-green text-white rounded-full font-semibold'>Order Now</button>

                </div>
              
            </div>
            
        </div>
         {/* menu shop section */}
         <div>
            {/* filter buton and sorting  */}
            <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                {/*all category  buttons  */}
                <div className='flex flex-row justify-start md:items-center md:gap-8 flex-wrap'>

                    <button onClick={showAll} className={selectCategory==='all'?'active':''}>All</button>
                    <button onClick={()=>filterdItems('salad')}>Salad</button>
                    <button onClick={()=>filterdItems('pizza')}>Pizza</button>
                    <button onClick={()=>filterdItems('soup')}>Soups</button>
                    <button onClick={()=>filterdItems('dessert')}>Desserts</button>
                    <button onClick={()=>filterdItems('drinks')}>Drinks</button>


                </div>
                  {/*sorting by filtering  */}
                  <div className='flex justify-end rounded mb-4'>
                    <div className='bg-black p-2'>
                   < FaFilter  className='w-4 h-4 text-white'></FaFilter>
                    </div>
                    {/* sorting option */}
                    <select name="sort" id="sort"
                    onChange={(e)=> handleSortChange(e.target.value)}value={sortOption} className='bg-black rounded p-2 text-white'
                    >
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="low-to-high">Low-high</option>
                        <option value="high-to-low">Hogh-low</option>
                    </select>

                  </div>


            </div>
            {/* product card */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-10  gap-4 '>
                {
                   currentItems.map((item)=>(
                    <Cards key={item._id} item={item}></Cards>
                   ))
                }
            </div>

         </div>

         {/* pagination */}
         <div className='flex justify-center items-center px-4'>
            {
                Array.from({length: Math.ceil(filterItems.length/ itemParPage)}).map((_,index)=>(
                    <button key={index + 1}
                     onClick={()=>pagination(index + 1)}
                    className={`px-3 mb-4 py-1 mx-1 rounded-full ${currentPage ===index + 1?'bg-green text-white':'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))
            }
         </div>
        </div>
    );
};

export default Menu;