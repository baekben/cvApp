import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { school, degree, gradDate } = this.props;
		return (
			<div>
				<h3>{school}</h3>
				<h3>{degree}</h3>
				<h4>{gradDate}</h4>
			</div>
		);
	}
}
