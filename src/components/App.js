import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../apis/unsplash";
import ImageList from "./ImageList";

class App extends Component {
	state = {
		images: []
	};

	onSearchSubmit = async term => {
		console.log(term);

		const response = await unsplash.get("/search/photos", {
			params: { query: term }
		});

		console.log(response.data.results);
		this.setState({ images: response.data.results });
	};
	render() {
		const FoundImagesText =
			this.state.images.length > 0
				? `Found ${this.state.images.length} images`
				: null;
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{FoundImagesText}
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
