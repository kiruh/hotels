import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaStar } from "react-icons/fa";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

import styles from "./Home.less";

class Home extends React.Component {
	static renderStars(count) {
		return [...new Array(5).keys()].map(star => (
			<FaStar key={star} color={star < count ? "#FBC02D" : undefined} />
		));
	}

	constructor(props) {
		super(props);
		this.state = { hotels: null };
	}

	componentDidMount() {
		this.fetchHotels();
	}

	async fetchHotels() {
		try {
			const response = await axios.get("/api/hotels/");
			const { data } = response;
			this.setState({ hotels: data });
		} catch (error) {
			this.setState({ error });
		}
	}

	renderHotels() {
		const { hotels } = this.state;
		return hotels.map(hotel => {
			const { id, name, pricePerNight, availableBeds, stars } = hotel;
			return (
				<div key={id} className="col-md-3 col-sm-4">
					<div className="card">
						<div className="card-body">
							<Link to={`/hotels/${id}`}>
								<h5 className={`card-title ${styles.title}`}>
									{name}
								</h5>
							</Link>
							<h5 className="card-text text-info">
								{pricePerNight} BGN
								<small className="text-muted">/ night</small>
							</h5>
							<hr />
							<div className="d-flex justify-content-between">
								<div>
									{availableBeds} <FaBed />
								</div>
								<div>{Home.renderStars(stars)}</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		const { error, hotels } = this.state;

		if (!hotels) return <Spinner />;
		if (error) return <ErrorMessage />;

		return <div className="row no-gutters">{this.renderHotels()}</div>;
	}
}

export default Home;
