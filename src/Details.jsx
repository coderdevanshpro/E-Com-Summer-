import Product from './Product';
import Header from './Header';
import Footer from './Footer';
import {useEffect,useState} from "react";
import {useParams,Link} from "react-router-dom";
import prod from "./prod.js";
import {getdata} from "./data.js";
import { HiArrowNarrowLeft,  HiArrowNarrowRight} from "react-icons/hi";
import { TbTruckLoading } from "react-icons/tb";
function Details({onAddToCart})
{
const [load,setLoad] = useState(true);
 const [data,setData]=useState();
  const [count,setCount]=useState(1);
  const params = useParams();
  console.log(params);
  const id=params.id;
  console.log("Id=="+id);
   useEffect(function()
            {
            const p= getdata(id);
             p.then(function(response){
                setData(response);
               setLoad(false);
               console.log(response.data);
              }).catch(function()
              {
                setLoad(false);
              })
            },[+id]);
  // let data=prod[id];
  // for(let i=0;i<prod.length;i++)
  //   {
  //     if(id==prod[i].id)
  //     {
  //       data=prod[i];
  //       break;
  //     }
  //   }
function onbuttonclick()
  {
    onAddToCart(id,count);

  }
 function handlecount(event)
   {
     setCount(event.target.value);
   }
  function changecount()
  {
    setCount(1);
  }

  if(load)
    return <><div class="flex justify-center items-center  text-center text-6xl h-screen">
    <TbTruckLoading class="animate-ping "/>
  </div>

    </>;

  return data?(

    <>{ 

      <div class="">
     <div class="bg-gray-100 h-1/5 grow" > 
       <Link class="ml-8 pt-8 block" to="/"><HiArrowNarrowLeft  class="text-3xl"/></Link>
     <div class="bg-gray-100 p-8 flex items-center justify-center">

            <div class="max-w-3xl  flex py-10  bg-white shadow-2xl" >
            <div class="w-1/3">
                <img src={data.thumbnail} class="w-full"/>
             </div>
              <div class="w-1/2 ml-16">
                <h1 class="text-2xl text-gray-700 mb-8 ">{data.title}</h1>
                <h1 class="text-3xl text-gray-700 font-bold mb-8">${data.price}</h1>
                <p class="text-gray-700 mb-8">{data.description}</p>
                <div class="mt-6 flex items-center">
                <input type="number" value={count} onChange={handlecount} placeholder="1" class="border p-1 w-16" />
                <button class="border p-1 pl-12 pr-12    rounded-lg bg-red-500 text-white" onClick={onbuttonclick}>ADD TO CART</button>
                </div>

              </div>
             </div>


    </div>
       <div class="flex justify-evenly">
         {id>1 && <Link class="ml-8 pt-8 block" to={'/Details/'+(id-1)} onClick={changecount}><HiArrowNarrowLeft class="text-3xl"/></Link>}
         {id<194 && <Link class="ml-8 pt-8 block" to={'/Details/'+(+id+1)} onClick={changecount}><HiArrowNarrowRight class="text-3xl"/></Link>}

       </div>
      </div>
      </div>
    }</>
  ):<div class="flex justify-center items-center  text-center text-6xl h-screen">
    <img src="https://www.impactplus.com/hs-fs/hubfs/404-error-page-examples-best.jpg?length=1200&name=404-error-page-examples-best.jpg"></img>
  </div>;
}
export default Details;