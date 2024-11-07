import axios from "axios";

export function getdata(id) {
  return axios.get('https://dummyjson.com/products/' + id)
    .then(response => response.data);
}

export default function getlist(params,query) {
  params.q=query;
  params.skip=params.limit-30;
  params.limit=30;
  console.log(params);
  if(query==="")
    return axios.get('https://dummyjson.com/products',{
   params
  }).then(response => response.data);
      else
    return axios.get('https://dummyjson.com/products/search?',{params})
    .then(response => response.data);
}
