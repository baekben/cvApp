import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { school, degree, gradDate } = this.props;
		return (
			<div>
				<h3>School: {school}</h3>
				<div class="row border-bottom border-dark">
					<h4 class="col-md-4 col-xs-6 ">Degree: {degree}</h4>
					<p class="col-md-4 col-xs-6">Grad Date: {gradDate}</p>
				</div>
			</div>
		);
	}
}
