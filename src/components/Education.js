import React, { Component } from 'react';

class Education extends Component {
	render() {
		const { handleChange, school, degree, gradDate } = this.props;

		return (
			<div className="form-group">
				<input
					type="text"
					placeholder="School name"
					value={school}
					onChange={handleChange}
					id="school"
					className="form-control"
				/>
				<input
					type="text"
					placeholder="Degree/Area of Study"
					value={degree}
					onChange={handleChange}
					id="degree"
					className="form-control"
				/>

				<input
					type="text"
					placeholder="Graduation Date"
					value={gradDate}
					onChange={handleChange}
					id="gradDate"
					className="form-control"
				/>
			</div>
		);
	}
}

export default Education;
