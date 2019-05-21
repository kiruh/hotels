import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import HotelPage from "./HotelPage";

const App = () => (
	<BrowserRouter>
		<div className="container">
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/hotels/:id" component={HotelPage} />
		</div>
	</BrowserRouter>
);

export default App;
