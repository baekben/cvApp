import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { company, position, tasks, startDate, endDate } = this.props;
		return (
			<div>
				<h3>Company: {company}</h3>
				<h4>Position: {position}</h4>
				<h4>Tasks: {tasks}</h4>
				<div class="row">
					<p class="col-xs-6 col-sm-4">Start Date: {startDate}</p>
					<p class="col-xs-6 col-sm-4">End Date: {endDate}</p>
				</div>
			</div>
		);
	}
}
