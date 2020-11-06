import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { school, degree, gradDate } = this.props;
		return (
			<div>
				<h3>School: {school}</h3>
				<h3>Degree: {degree}</h3>
				<h4>Grad Date: {gradDate}</h4>
			</div>
		);
	}
}
