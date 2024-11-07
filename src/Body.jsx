import Product from './Product.jsx';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
function Body({data})
{
  
 return (
    
    <div class="flex flex-wrap justify-between gap-4 mx-32">
      {data.map(function(item){return <Link to={"/Details/"+item.id}><Product title={item.title} category={item.category} image={item.thumbnail} price={item.price} dp={item.dp} key={item.category}/></Link>})}
   
    </div>
    
  );
}
export default Body;