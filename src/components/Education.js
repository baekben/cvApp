import React, { Component } from 'react';

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			school: '',
			degree: '',
			gradDate: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="School name"
					value={this.state.school}
					onChange={this.handleChange}
					id="school"
					className="form-control"
				/>
				<input
					type="text"
					placeholder="Degree/Area of Study"
					value={this.state.degree}
					onChange={this.handleChange}
					id="degree"
					className="form-control"
				/>

				<input
					type="text"
					placeholder="Graduation Date"
					value={this.state.gradDate}
					onChange={this.handleChange}
					id="gradDate"
					className="form-control"
				/>
			</div>
		);
	}
}

export default Education;
