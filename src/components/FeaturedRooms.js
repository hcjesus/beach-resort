import React, {Component} from 'react';
import {RoomContext,RoomProvider} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
	static contextType = RoomContext;
	render() {
		const {featuredRooms:rooms} = this.context;
		console.log(rooms);
		return (
			<div>
				<Title 
					title = 'Featured Rooms'
				/>
				<Room/>
				<Loading/>

			</div>
		)
	}
}