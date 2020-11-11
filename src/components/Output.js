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
			displayCV,
		} = this.props;
		console.log('This is the CV');
		return (
			<div class="container">
				<GeneralInforView fullName={fullName} email={email} phone={phone} />
				<EducationView school={school} degree={degree} gradDate={gradDate} />
				<ExperienceView
					company={company}
					position={position}
					tasks={tasks}
					startDate={startDate}
					endDate={endDate}
				/>
				<div>
					<button type="submit" onClick={displayCV}>
						Edit
					</button>
				</div>
			</div>
		);
	}
}

export default Output;
