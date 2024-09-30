import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Product = () => {
  const [products,setProduct] = useState([]);

  useEffect(()=> {
    const fetchProducts = async()=>{
       try{
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        setProduct(data);
       }
       catch{
        console.log(Error);
       }
    }
    fetchProducts();
},[]);
  return (
    <div>
    <Navbar />
    <div>
       <ul>
        {products.length > 0 ? (
          products.map((item)=>(
            <li key={item.id}>
            <h5>{item.albumId}</h5>
            <h5>{item.title}</h5>
            <h5>{item.url}</h5>
            <h5>{item.thumbnailUrl}</h5>
          </li>
          ))
          
        ) : (
          <p>No Users Found!</p>
        )}
       </ul>
    </div>
      
    </div>
  )
}

export default Product
