import React from 'react';

export default function EducationView({school, degree, gradDate}) {
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
