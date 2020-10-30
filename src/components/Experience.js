import React, { Component } from 'react';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(this.state);
	};

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// };

	render() {
		const { company, position, tasks, startDate, endDate } = this.state;

		return (
			<div>
				<h2>
					<u>Experience</u>
				</h2>
				<form>
					<div className="form-group">
						<input
							type="text"
							id="company"
							onChange={this.handleChange}
							placeholder="Company Name"
							value={company}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							id="position"
							onChange={this.handleChange}
							placeholder="Position"
							value={position}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							id="tasks"
							onChange={this.handleChange}
							placeholder="Task/Description of Job (data management, marketing, etc.)"
							value={tasks}
							className="form-control"
						/>
					</div>
					<label>
						<h5>Time Worked: </h5>
					</label>
					<div className="form-group">
						<input
							type="text"
							id="startDate"
							onChange={this.handleChange}
							placeholder="Starting Date"
							value={startDate}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							id="endDate"
							onChange={this.handleChange}
							placeholder="Date Ended"
							value={endDate}
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

export default Experience;
