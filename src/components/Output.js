import React, { Component } from 'react';
import GeneralInforView from './GeneralInfoView';
import EducationView from './EducationView';
import ExperienceView from './ExperienceView';

class Output extends Component {
	render() {
		const {
			fullName,
			email,
			phone,
			school,
			degree,
			gradDate,
			company,
			position,
			tasks,
			startDate,
			endDate,
		} = this.props;
		console.log('This is the CV');
		return (
			<div>
				<GeneralInforView fullName={fullName} email={email} phone={phone} />
				<EducationView school={school} degree={degree} gradDate={gradDate} />
				<ExperienceView
					company={company}
					position={position}
					tasks={tasks}
					startDate={startDate}
					endDate={endDate}
				/>
			</div>
		);
	}
}

export default Output;
