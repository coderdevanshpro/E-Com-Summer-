import React, { useEffect, useState } from "react";
import { getdata } from "./data";
import Product from "./Product.jsx";
import {RxCross2} from "react-icons/rx";
import { TbTruckLoading } from "react-icons/tb";

function Cart({ cart , updateCart}) {
  console.log("cart=", cart);
  const prodids = Object.keys(cart);
  const [products, setProducts] = useState([]);
  console.log("prodids", prodids.length);
  console.log("products outside ", products.length);
  const [loading,setLoading]=useState(true);
  const [localcart,setLocalcart]=useState(cart);

  useEffect(function()
            {
              setLocalcart(cart);
            },[cart]);
  

  useEffect(() => {
    const myProdPromise = [];
    for (let i = 0; i < prodids.length; i++) {
      const promise = getdata(prodids[i]);
      myProdPromise.push(promise);
    }
    Promise.all(myProdPromise).then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);

  console.log(products);
  function onRemove(prodId) {
    console.log("prodId=", prodId);
    const newcart = { ...cart };
    console.log("newcart before=", newcart);
    delete newcart[prodId];
    console.log("newcart after=", newcart);
    updateCart(newcart);
    setLoading(true);
  }
  function Update()
    {
      updateCart(localcart);
    }
 // function countTotal()
 //   {
 //     const Total=0;
 //     for(let i=0;i<localcart.size();i++)
 //      console.log(localcart.get(i));
 //     return Total;
     
 //   }
  function onAdd(newValue,prodId)
    {
      
      const newLocalCart = { ...localcart , [prodId]:newValue};
      setLocalcart(newLocalCart);
    }
  if(loading)
  return  <div className="animate-pulse flex flex-col justify-center items-center text-6xl h-screen">
      < TbTruckLoading className="animate-ping"/>
    </div>;
 
  return (
    <>
     <div class="grid-container flex justify-evenly border-2 bg-gray-100  mx-44 py-2 mt-4">
       <div class="grid-item w-1/2 text-center">Product</div>
       <div class="grid-item">Price</div>
       <div class="grid-item">Quantity</div>
       <div class="grid-item">Subtotal</div>
     </div>
      {products.map((item, index) => (
        <div class="flex border-2 mx-44 py-2" key={index}>

          <div class="flex w-3/5">
          <button prodId={item.id}  onClick={function()
            {onRemove(item.id)}}><RxCross2 class="text-2xl ml-10"/></button>

          <img class="w-20 h-20 ml-10" src={item.thumbnail}/>
          <div class="ml-20 mt-6 font-bold text-red-400 text-lg" >
          {item.title}
            </div>
          </div>
         
          <div class="w-28 ml-8 font-bold text-gray-500">${item.price}</div>
         
         
          <input type="number" value={localcart[item.id]} class="border-2 w-10 h-8 text-center" onChange={function(event){
          onAdd(event.target.value,item.id)}}
            productid={item.id}>
          </input>
          <div class="ml-20 font-bold text-gray-500">${(item.price * localcart[item.id]).toFixed(2)}
            
            </div>

        </div>
        
      ))}
      <button class="border-2 bg-red-400 px-4 py-2 ml-44 mt-4" onClick={Update}>Update Cart</button>
      <div class="grid-container flex justify-evenly border-2 bg-gray-100  mx-44 py-2 mt-4">
        Cart Total
        {/* <div class="grid-item">${countTotal()}</div> */}
        
      </div>
    </>
  );
}

export default Cart;
