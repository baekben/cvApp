import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { company, position, tasks, startDate, endDate } = this.props;
		return (
			<div>
				<h3>Company: {company}</h3>
				<h2>Position: {position}</h2>
				<h2>Tasks: {tasks}</h2>
				<h2>Start Date: {startDate}</h2>
				<h2>End Date: {endDate}</h2>
			</div>
		);
	}
}
