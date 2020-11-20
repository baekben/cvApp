import React, { Component } from 'react';

class Education extends Component {
	render() {
		const { handleChange, school, degree, gradDate, eduSubmit } = this.props;

		return (
			<div className="form-group">
				<h2>
					<u>School</u>
				</h2>
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
				<div>
					<button className="btn btn-secondary" type="submit" id="schoolSave" onClick={eduSubmit}>
						Add School (Optional)
					</button>
				</div>
			</div>
		);
	}
}

export default Education;
