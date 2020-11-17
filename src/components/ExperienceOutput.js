import React, { Component } from 'react';
import Experience from './Experience';
import ExperienceView from './ExperienceView';

export default class ExperienceOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
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
		if (e.target.id === 'jobBtn') {
			//add school
			let job = {
				company: this.state.company,
				position: this.state.position,
				tasks: this.state.tasks,
				startDate: this.state.startDate,
				endDate: this.state.endDate,
			};
			this.props.jobs(job);
		}
	};
	render() {
		const { company, position, tasks, startDate, endDate } = this.state;
		const { completedForm } = this.props;
		return completedForm ? (
			<Experience
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
		);
	}
}
