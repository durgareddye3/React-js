
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';

import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({cart}){

 //fetch('http://localhost:3000/api/products')
 
//       .then((respones)=>{
  //     return respones.json() }).then((data)=>{
    //  console.log(data);

   //}) 

   const [products, setProducts]= useState([]);

   

   useEffect(()=>{
    axios.get('/api/products').then((respone)=>{
    setProducts(respone.data);
   });



  }, [])
  return(
    <>
      <Header cart={cart} />
        <div className="home-page">
          <ProductsGrid products={products} />
        </div>
    </>
  );
}