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
			buttonText: 'Submit',
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
		if (this.state.completedForm) {
			this.setState({
				buttonText: 'Edit',
			});
		} else {
			this.setState({
				buttonText: 'Submit',
			});
		}
	};

	displayCV = () => {
		const { completedForm } = this.state;
		this.setState({
			completedForm: !completedForm,
		});
	};

	deleteItem = (e) => {
		this.props.removeItem(e.target.id, 'edu');
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
							deleteItem={this.deleteItem}
						/>
					) : (
						<EducationView
							school={school}
							degree={degree}
							gradDate={gradDate}
							deleteItem={this.deleteItem}
						/>
					)}
				</div>

				<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
					{this.state.buttonText}
				</button>
				<button type="button" id={number} onClick={this.deleteItem}>
					Delete
				</button>
			</div>
		);
	}
}
