import '../style/Header.css'
import React from 'react';
import image from '../assets/images/logo-png.icon.png'
 const Header=()=>{
    return(
        <header className='main-header'>
       <div className='logo'>

        <img src={image }  alt='logo'/>
       </div>
        <nav>
        <ul className='home'>
        <li><a href='/'>Home</a></li> 
        <li>login</li> 
        <li><a href='/about'>About</a></li> 
        <li><a href='/contact'>Contact us</a></li> 
    

        </ul>

        </nav>
        

            </header>
    )
};
export default Header ;