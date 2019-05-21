import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
import { FaBed, FaStar } from "react-icons/fa";

import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class HotelPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hotel: null };
	}

	componentDidMount() {
		this.fetchHostel();
	}

	async fetchHostel() {
		const { match } = this.props;
		const { id } = match.params;

		try {
			const response = await axios.get(`/api/hotels/${id}/`);
			const { data } = response;
			this.setState({ hotel: data });
		} catch (error) {
			this.setState({ error });
		}
	}

	renderStars() {
		const { hotel } = this.state;
		const { stars } = hotel;

		return [...new Array(5).keys()].map(star => (
			<FaStar key={star} color={star < stars ? "#FBC02D" : undefined} />
		));
	}

	render() {
		const { error, hotel } = this.state;

		if (!hotel) return <Spinner />;
		if (error) return <ErrorMessage />;

		const { name, pricePerNight, availableBeds } = hotel;

		return (
			<div className="jumbotron">
				<h1 className="display-4 mb-4">{name}</h1>
				<h3 className="card-text text-info">
					{pricePerNight} BGN
					<small className="text-muted">/ night</small>
				</h3>
				<hr />
				<div className="d-flex justify-content-between">
					<h3>
						{availableBeds} <FaBed />
					</h3>
					<h3>{this.renderStars()}</h3>
				</div>
			</div>
		);
	}
}

HotelPage.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HotelPage;
