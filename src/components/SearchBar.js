import React, { Component } from "react";

export default class SearchBar extends Component {
	state = {
		term: ""
	};

	onInputChange = e => {
		console.log(e.target.value);
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		// console.log(this.state.term);
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						{/* <input type="text" onChange={this.onInputChange} /> */}
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
