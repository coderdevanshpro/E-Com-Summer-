function Product(data) {
    return (
      <div class="pb-8">
        <div class="flex flex-col justify-center items-center">
        <img src={data.image} class="w-44 h-44"/>
          <h1 class="text-s text-gray-500 pt-2">{data.category}</h1>
          <h1 class="text-lg w-48 text-center">{data.title}</h1>
        <div class="flex">
        <img src="https://th.bing.com/th/id/OIP.XgmIIZtytU9lqVOFmL46TwHaHF?rs=1&pid=ImgDetMain" class="h-3"></img>
         <img src="https://th.bing.com/th/id/OIP.XgmIIZtytU9lqVOFmL46TwHaHF?rs=1&pid=ImgDetMain" class="h-3"></img>
         <img src="https://th.bing.com/th/id/OIP.XgmIIZtytU9lqVOFmL46TwHaHF?rs=1&pid=ImgDetMain" class="h-3"></img>
         <img src="https://th.bing.com/th/id/OIP.XgmIIZtytU9lqVOFmL46TwHaHF?rs=1&pid=ImgDetMain" class="h-3"></img>
         <img src="https://th.bing.com/th/id/OIP.XgmIIZtytU9lqVOFmL46TwHaHF?rs=1&pid=ImgDetMain" class="h-3"></img>
        </div>
        <div class="flex">
        <del class="text-sm inline text-gray-500">{data.dp}</del>
        <h1 class="text-lg">${data.price}</h1>
        </div>
          </div>
      </div>
    );
      
    }
    export default Product;