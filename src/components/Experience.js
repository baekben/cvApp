import React, { Component } from 'react';

class Experience extends Component {
	render() {
		const {
			company,
			position,
			tasks,
			startDate,
			endDate,
			handleChange,
			number,
			handleSubmit,
		} = this.props;

		return (
			<form className="form-group" onSubmit={handleSubmit}>
				<div className="row">
					<h4 className=".col-md-3 .col-md-offset-3">Job/Experience #{number}</h4>
				</div>
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
			</form>
		);
	}
}

export default Experience;
