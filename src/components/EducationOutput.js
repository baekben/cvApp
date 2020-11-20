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
			eduNum: 1,
			educations: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.eduSubmit = this.eduSubmit.bind(this);
		this.addEducation = this.addEducation.bind(this);
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
			this.addEducation(education);
		}
	};

	addEducation = (education) => {
		this.setState({
			eduNum: this.eduNum + 1,
			educations: this.educations.concat(education),
		});
		console.log('Education Added');
	};

	render() {
		const { school, degree, gradDate } = this.state;
		const { completedForm } = this.props;

		const schools = [];
		for (let i = 0; i < this.state.eduNum; i++) {
			console.log('school');
			if (this.completedForm) {
				schools.push(
					<Education
						school={school}
						degree={degree}
						gradDate={gradDate}
						handleChange={this.handleChange}
						eduSubmit={this.eduSubmit}
						key={i}
					/>
				);
			}
			if (!completedForm) {
				schools.push(<EducationView school={school} degree={degree} gradDate={gradDate} key={i} />);
			}
		}

		return (
			<div>
				<div>
					<button
						className="btn btn-secondary"
						type="submit"
						id="schoolSave"
						onClick={this.eduSubmit}>
						Add School (Optional)
					</button>
				</div>
				{schools}
			</div>
		);
	}
}
