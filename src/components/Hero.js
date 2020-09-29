import React from 'react';
import Banner from "./banner";
import {Link} from "react-router-dom";

const Hero = (props) => {
	const {hero,children} = props;
  return (
  	<div>
    <header className={hero}>{children}</header>
			</div>
  )
}
Hero.defaultProps = {
	hero: "defaultHero"
};
export default Hero;