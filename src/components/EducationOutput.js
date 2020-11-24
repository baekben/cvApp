import React, { Component } from 'react';
import Education from './Education';
import EducationView from './EducationView';
import { nanoid } from 'nanoid';

export default class EducationOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: nanoid(),
			school: '',
			degree: '',
			gradDate: '',
			completedForm: true,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.newEducation(this.state);
		this.displayCV();
	};

	displayCV = () => {
		const { completedForm } = this.state;
		this.setState({
			completedForm: !completedForm,
		});
	};

	deleteItem = (e) => {
		console.log(e);
		this.props.removeItem(e, 'edu');
	};

	render() {
		const { school, degree, gradDate, completedForm } = this.state;
		const { number } = this.props;

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
							handleSubmit={this.handleSubmit}
						/>
					) : (
						<EducationView school={school} degree={degree} gradDate={gradDate} />
					)}
				</div>
				<button type="button" onClick={() => this.deleteItem(number)}>
					Delete
				</button>
			</div>
		);
	}
}
