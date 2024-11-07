import React,{useState,useEffect} from 'react';
//import Product from './Product';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';
import Details from './Details';
import {Route,Routes,Link,useSearchParams} from "react-router-dom";
import prod from "./prod.js";
import getlist from "./data.js";
import { TbTruckLoading } from "react-icons/tb";




function MainBody() {
  const[prod1,setProd]=useState([]);
  const[load,setLoad]=useState(true);
  const [query,setquery]=useState("");
  const [sort,setsort]=useState("default");
  const [page,setPage]=useState(1); 
  const [limit,setLimit]=useState(30);
  const [total,setTotal]=useState(0);
  const [searchParams,setSearchParams]=useSearchParams();
  
 
 
useEffect(function(){

  let sortBy="default";
  let order="asc";
  if(sort=="name")
    sortBy="title";
  else if(sort=="high")
    sortBy="price";
  else if(sort=="low")
  {
    sortBy="price";
    order="desc";
  }
  
  setLimit(searchParams.get("limit")||30);
  getlist({sortBy,limit,order},query).then(function(response)
  {
    setProd(response.products);
    setLoad(false);
    setTotal(response.total);
    
    
  });
},[sort,limit,query]);


  
  


  
 
  // const newprod=prod1.filter(function(item){
  //   return item.title.toLowerCase().indexOf(query.toLowerCase())!=-1;
  // })

  // if(sort=="high")
  // {
  //   newprod.sort(function(x,y)
  //                {
  //                  return x.price<y.price?-1:1;
  //                });
  // }
  // else if(sort=="name")
  // {
  //   newprod.sort(function(x,y)
  //                {
  //                  return x.title<y.title?-1:1;
  //                });
  // }
  // else if(sort=="low")
  // {
  //   newprod.sort(function(x,y)
  //                {
  //                  return x.price<y.price?1:-1;
  //                });
  // }
  function search(event)
    {
      const newQuery=event.target.value;
      setquery(newQuery);
      
     }
  function Sorting(event)
    {
      console.log(event.target.value);
      setsort(event.target.value);
    }
  console.log(total);

  if(load)
    {
      return  <><div class="flex justify-center items-center  text-center text-6xl h-screen">
      <TbTruckLoading class="animate-ping "/>
    </div>

      </>;
    }
  return (
    <div>
   
    <div class="bg-gray-200 py-4">
      <div class=" border-2 bg-white my-8 mx-44 rounded-xl">

      <div class=" flex justify-between ">
         <input class="mb-8 border-2 pr-8 mr-32 bg-gray-200 mt-4 ml-32" placeholder=" Search" onChange={search} value={query} ></input>
    <select class="mb-8 border-2 pr-8 mr-32 bg-gray-200 mt-4" onChange={Sorting} value={sort}>
    <option value="default" > Default Sorting </option>
      <option value="name" > Sort by name </option>
      <option value="high"> Price low to high </option>
      <option value="low"> Price high to low </option>
    </select>
      </div>
     <Body data={prod1}>
     </Body>
        
        {[...Array(Math.ceil(total/30)).keys()].map(item => <button class="border border-red-400 px-3 py-2 ml-2 mb-2 hover:bg-red-400 hover:text-white focus:bg-red-400 focus:text-white" onClick={()=>setLimit((item+1)*30)}>{item+1}</button>)}
        {/* {[...Array(Math.ceil(total/30)).keys()].map(item => <Link class="border border-red-400 px-3 py-2 ml-2 mb-2 hover:bg-red-400 hover:text-white focus:bg-red-400 focus:text-white"  key={item+1} to={"?skip="+ (item+1)*30 }>{item+1}</Link>)}
         */}
        
    </div>
    
    </div>
   
    </div>
  );
}

export default MainBody;
