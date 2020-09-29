import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
	return (
		<React.Fragment>
			<Hero>
				<Banner title = "Luxurious rooms"
				subtitle = "Deluxe rooms starting at $299">
				<Link to="/rooms" className="btn-primary">Our Rooms</Link>
				</Banner>
			</Hero>
			<Services/>
			<FeaturedRooms/>
		</React.Fragment>
			
		
	)
}