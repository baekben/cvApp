import React, { Component } from 'react';
import Experience from './Experience';
import ExperienceView from './ExperienceView';
import { nanoid } from 'nanoid';

export default class ExperienceOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: nanoid(),
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
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
		this.props.newJob(this.state);
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
		this.props.removeItem(e, 'job');
	};

	render() {
		const { completedForm, company, position, tasks, startDate, endDate } = this.state;
		const { number } = this.props;
		return (
			<div>
				<div>
					{completedForm ? (
						<Experience
							number={number}
							company={company}
							position={position}
							tasks={tasks}
							startDate={startDate}
							endDate={endDate}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
					) : (
						<ExperienceView
							company={company}
							position={position}
							tasks={tasks}
							startDate={startDate}
							endDate={endDate}
						/>
					)}
				</div>
				<button type="button" onClick={() => this.deleteItem(number)}>
					Delete
				</button>
			</div>
		);
	}
}
