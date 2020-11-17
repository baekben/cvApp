import React, { Component } from 'react';

class Experience extends Component {
	render() {
		const { company, position, tasks, startDate, endDate, handleChange, handleSubmit } = this.props;

		return (
			<div className="form-group">
				<h2>
					<u>Experience</u>
				</h2>

				<input
					type="text"
					id="company"
					onChange={handleChange}
					placeholder="Company Name"
					value={company}
					className="form-control"
				/>
				<input
					type="text"
					id="position"
					onChange={handleChange}
					placeholder="Position"
					value={position}
					className="form-control"
				/>
				<input
					type="text"
					id="tasks"
					onChange={handleChange}
					placeholder="Task/Description of Job (data management, marketing, etc.)"
					value={tasks}
					className="form-control"
				/>
				<label>
					<h5>Time Worked: </h5>
				</label>
				<input
					type="text"
					id="startDate"
					onChange={handleChange}
					placeholder="Starting Date"
					value={startDate}
					className="form-control"
				/>
				<input
					type="text"
					id="endDate"
					onChange={handleChange}
					placeholder="Date Ended"
					value={endDate}
					className="form-control"
				/>
				<button className="btn btn-secondary" id="jobBtn" onClick={handleSubmit}>
					Add Experience (optional)
				</button>
			</div>
		);
	}
}

export default Experience;
