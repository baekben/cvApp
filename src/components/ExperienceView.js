import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { company, position, tasks, startDate, endDate } = this.props;
		return (
			<div>
				<h3>{company}</h3>
				<h2>{position}</h2>
				<h2>{tasks}</h2>
				<h2>{startDate}</h2>
				<h2>{endDate}</h2>
			</div>
		);
	}
}
