import React from 'react';

export default function EducationView({ company, position, tasks, startDate, endDate }) {
	return (
		<div className="border-bottom border-dark">
			<h3>Company: {company}</h3>
			<h4>Position: {position}</h4>
			<h4>Tasks: {tasks}</h4>
			<div className="row">
				<p className="col-xs-6 col-sm-6">Start Date: {startDate}</p>
				<p className="col-xs-6 col-sm-6">End Date: {endDate}</p>
			</div>
		</div>
	);
}
