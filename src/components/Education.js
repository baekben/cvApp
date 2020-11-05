import React, { Component } from 'react';

class Education extends Component {
	render() {
		const { school, degree, gradDate, handleChange } = this.props;

		return (
			<div>
				<h2>
					<u>Education</u>
				</h2>
					<input
						type="text"
						placeholder="School name"
						onChange={handleChange}
						id="school"
						value={school}
						className="form-control"
					/>
					<input
						type="text"
						placeholder="Degree/Area of Study"
						onChange={handleChange}
						id="degree"
						value={degree}
						className="form-control"
					/>

					<input
						type="text"
						placeholder="Graduation Date"
						onChange={handleChange}
						id="gradDate"
						value={gradDate}
						className="form-control"
					/>

			</div>
		);
	}
}

export default Education;
