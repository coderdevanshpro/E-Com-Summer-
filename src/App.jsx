import MainBody from "./MainBody.jsx";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import { useParams } from "react-router-dom";
import { TbTruckLoading } from "react-icons/tb";
import { useState } from "react";
import Signin2 from "./Signin2";
import Cart from "./Cart";
import Productlist from "./Productlist";

function App() {

  
  const params = useParams();
  console.log("p", params);
  const id = params.id;
  console.log("Id==", id);

  const savedstring = localStorage.getItem("my-cart") || "{}";
  const saveddata = JSON.parse(savedstring);
  const [cart, setCart] = useState(saveddata);

  function handleAdd(productid, count) {
    let oldcount = +cart[productid] || 0;
    const newcart = { ...cart, [productid]: oldcount + (+count) };
    updateCart(newcart);
   
  }

  const total = Object.keys(cart).reduce((previous, current) => {
    return previous + (+cart[current]);
  }, 0);
  console.log(total);

  console.log("cart=", cart);

function updateCart(newcart)
  {
    setCart(newcart);
    const cartstring = JSON.stringify(newcart);
    console.log("cartstring", cartstring);
    localStorage.setItem("my-cart", cartstring);
  }
 
  
  return true ? (
    <>
       <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <div  class="text-center text-red-400 text-xl" ><a href="https://in.linkedin.com/in/devansh-sharma-8729a1250?trk=profile-badge">Devansh Sharma</a></div>

      <div className="flex flex-col h-screen">
         <Footer t={total} />
        <div className="flex-grow">
          <Routes className="flex-grow">
            <Route path="/Signin2" element={<Signin2 />} />
            <Route path="/" element={<App/>}/>
            <Route index element={<MainBody />} />
            <Route path="/Details/:id/" element={<Details onAddToCart={handleAdd} />} />
            <Route path="/Cart" element={<Cart cart={cart} updateCart={updateCart}></Cart>} />
            <Route path="*" element={
              <div className="flex justify-center items-center text-center text-6xl h-screen">
                <img src="https://www.impactplus.com/hs-fs/hubfs/404-error-page-examples-best.jpg?length=1200&name=404-error-page-examples-best.jpg" alt="404" />
              </div>
            } />
          </Routes>
        </div>
       <Header />
      </div>
    </>
  ) : (
    <div className="flex flex-col justify-center items-center text-6xl h-screen">
      <TbTruckLoading />
    </div>
  );
}

export default App;
