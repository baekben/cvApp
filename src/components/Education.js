import React, { Component } from 'react';

class Education extends Component {
	render() {
		const { handleChange, school, degree, gradDate, number, handleSubmit } = this.props;

		return (
			<form className="form-group" onSubmit={handleSubmit}>
				<div className="row">
					<h4 className=".col-md-3 .col-md-offset-3">Education #{number}</h4>
				</div>
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
			</form>
		);
	}
}

export default Education;
