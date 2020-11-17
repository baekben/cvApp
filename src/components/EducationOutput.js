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
		this.eduSubmit = this.eduSubmit.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	eduSubmit = (e) => {
		e.preventDefault();
		if (e.target.id === 'schoolSave') {
			//add school
			let education = {
				school: this.state.school,
				degree: this.state.degree,
				gradDate: this.state.gradDate,
			};
			this.props.educations(education);
		}
	};
	render() {
		const { school, degree, gradDate } = this.state;
		const { completedForm } = this.props;

		return completedForm ? (
			<Education
				school={school}
				degree={degree}
				gradDate={gradDate}
				handleChange={this.handleChange}
				eduSubmit={this.eduSubmit}
			/>
		) : (
			<EducationView school={school} degree={degree} gradDate={gradDate} />
		);
	}
}
