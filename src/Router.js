   
   import {createBrowserRouter} from "react-router-dom";  
   
   import ProductList from "./Pages/prodact/Prodauct";
   import Header from"./shared/Header";
   import App from "./App";
   import AuctionList2 from "./Pages/about/AboutPage";  
   
   export const router = createBrowserRouter([
    {
path:'/',
element:<App/>,
children:[
    
        {
            path: "/",
          
            element: <ProductList/>  ,
          },
          {
              path: "/about",
              element: <AuctionList2/>,
            },
            {
              path: "/contact",
              element: <div>contact</div>,
            },   

   
],
    },
  ]);  