import React from "react";
import ProductCard from "./components/iphone";
import './style/ProductList.css';
import {Data} from '../../core/data/movies.js'

const ProductList =()=>{
const movieData=Data;


    return (<div className="product-list">

{
    movieData.map((movieData)=>{
return (
 
  <ProductCard key={movieData.id }
  name={movieData.name} 
  des={movieData.description} 
  img={movieData.image}/>
 
 ) 

    })  

}
    </div>
    
    )
};
export default ProductList;