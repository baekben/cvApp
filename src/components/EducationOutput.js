import React, { Component } from 'react';
import Education from './Education';
import EducationView from './EducationView';

export default class EducationOutput extends Component {
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
		const { school, degree, gradDate } = this.state;
		const { completedForm, number } = this.props;

		return (
			<div>
				<div>
					{completedForm ? (
						<Education
							number={number}
							school={school}
							degree={degree}
							gradDate={gradDate}
							handleChange={this.handleChange}
						/>
					) : (
						<EducationView school={school} degree={degree} gradDate={gradDate} />
					)}
				</div>
				<div>
					{/* <button
						className="btn btn-secondary"
						type="submit"
						id="schoolSave"
						onClick={this.eduSubmit}>
						Add School (Optional)
					</button> */}
				</div>
			</div>
		);
	}
}
