import React, { Component } from 'react';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			school: '',
			degree: '',
			gradDate: '',
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log('Education: ' + this.state);
	};

	render() {
		const { school, degree, gradDate } = this.state;

		return (
			<div>
				<h2>
					<u>Education</u>
				</h2>
				<form>
					<div className="form-group">
						<input
							type="text"
							placeholder="School name"
							onChange={this.handleChange}
							id="schooName"
							value={school}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder="Degree/Area of Study"
							onChange={this.handleChange}
							id="degree"
							value={degree}
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							placeholder="Graduation Date"
							onChange={this.handleChange}
							id="gradDate"
							value={gradDate}
							className="form-control"
						/>
					</div>

					<div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
						<button className="btn btn-primary">Edit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Education;
