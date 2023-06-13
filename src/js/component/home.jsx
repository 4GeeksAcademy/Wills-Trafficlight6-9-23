import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected,setSelected]=useState("red")
	return (
		<div className="text-center">
			<div className="lightContainer">
				<div className={"light red "+(selected==="red"?"glow":'')}
				  onClick={()=>setSelected("red")}>
					

				</div>
				<div className={"light yellow "+(selected==="yellow"?"glow":'')}>

				</div>
				<div className={"light green "+(selected==="red"?"glow":'')}>

				</div>
			</div>
		</div>
	);
};

export default Home;
