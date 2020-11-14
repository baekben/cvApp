import React, { Component } from 'react';

export default class EducationView extends Component {
	render() {
		const { school, degree, gradDate } = this.props;
		return (
			<div>
				<h3>School: {school}</h3>
				<div className="row border-bottom border-dark">
					<h4 className="col-md-6 col-xs-6 ">Degree: {degree}</h4>
					<p className="col-md-6 col-xs-6">Grad Date: {gradDate}</p>
				</div>
			</div>
		);
	}
}
