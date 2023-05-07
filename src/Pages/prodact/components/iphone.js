import React from "react";
import '../style/ProductCard.css'
import App from "./test";
import Rating from "./Rating";
import Comment from "./coment";
import Bidding, { AboutPage } from "./input";
import { USER_TYPES } from "./input";

const ProductCard =(props)=>{
    return(
        <div className="product-card">
       <img src={props.img} alt="product-card " className="card-imgg" />
       <div className="card-info">
       <h1 className="titel">{props.name}</h1>
      
       </div>
         <p className="info">
             {props.des}
        </p>
        <div >
            <AboutPage />
            <Rating className="rate"/>
            {/* <App/> */}
         
        </div>
      <hr className="h5"/>
        <Comment className ="com"/>
       {/* +<button className="botton" >watch now</button> */}
        </div>

    )
};
export default ProductCard;
