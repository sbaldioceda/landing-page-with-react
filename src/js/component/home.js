import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "../component/jumbotron.js";
import { Card } from "../component/card.js";
import { Navbar } from "../component/navbar.js";
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />

			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}
