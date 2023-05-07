import Header from "./shared/Header";

import Footer from "./shared/Footer.js";

import './style/App.css';
import { Outlet } from "react-router-dom";

export const App=() =>{
  return (
    <div >
    <Header/>
 
 <Outlet/>
 
  <Footer/>

    </div>
    
  );
};
export default App;


