import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/banner";
import {Link} from "react-router-dom";

const Rooms = () => {
  return (
    
    	<Hero hero="roomsHero"> 
    		<Banner title="Our Rooms">
    		<Link to="/" className="btn-primary" type="button">return home</Link>
    		</Banner>
    	</Hero>
    
  )
}

export default Rooms;