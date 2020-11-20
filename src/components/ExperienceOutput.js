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
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
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
