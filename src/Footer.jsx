import {Link} from "react-router-dom";
function Footer({t})
{
  return(
    <div class="flex justify-between">
      <Link class="text-2xl pl-44 pt-6 text-gray-400 s" to="/Signin2">Signin</Link>
      <Link to="/">
    <img src="https://th.bing.com/th/id/OIP.Ku4iy6JfyZOZAKxOkfp0ewAAAA?rs=1&pid=ImgDetMain" class=" h-20  pt-6"></img></Link>
  <div >
    <Link to="/Cart">
      <img src="https://cdn-icons-png.flaticon.com/512/10154/10154110.png" class="h-16 pr-44 mt-4"></img>
      <div class="ml-10 -mt-16 text-white border-2 bg-red-400 inline absolute px-2 rounded-full">{t}</div>
      </Link>
  </div>
    </div>);
}
export default Footer;