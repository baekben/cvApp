import React, { useState } from 'react';
import GeneralInfoOutput from './components/GeneralInfoOutput';
import EducationOutput from './components/EducationOutput';
import ExperienceOutput from './components/ExperienceOutput';

function App() {
	const [eduNum, setEduNum] = useState(1);
	const [jobNum, setJobNum] = useState(1);
	const [newEducation, setNewEducation] = useState([]);
	const [educations, setEducations] = useState([]);
	const [newJob, setNewJob] = useState([]);
	const [jobs, setJobs] = useState([]);

	const addEducation = (education) => {
		setEduNum(eduNum + 1);
		setEducations([...educations, education]);
	};

	const addJob = (job) => {
		setJobNum(jobNum + 1);
		setJobs([...jobs, job]);
	};

	const newEducations = (education) => {
		setNewEducation([...newEducation, education]);
	};

	const updateEducation = () => {
		addEducation(newEducation);
	};

	const newJobs = (job) => {
		setNewJob([...newJob, job]);
	};

	const updateJob = () => {
		addJob(newJob);
	};

	const removeItem = (index, type) => {
		let tempList;
		if (type === 'edu') {
			console.log('remove edu ' + index);
			tempList = educations;
			tempList.splice(index, 1);
			setEducations(tempList);
		}
		if (type === 'job') {
			console.log('remove job ' + index);
			tempList = jobs;
			tempList.splice(index, 1);
			setJobs(tempList);
		}
	};
	return (
		<div className="col-6 mx-auto mt-5">
			<header>
				<h1>CV/Resume Builder</h1>
			</header>
			<div>
				<div>
					<GeneralInfoOutput />
					<h2>
						<u>School</u>
					</h2>
					<button className="btn btn-secondary" type="button" onClick={updateEducation}>
						Add Education
					</button>
					{educations.map((edu, i) => (
						<EducationOutput
							key={i}
							number={i + 1}
							edu={edu}
							index={i}
							newEducation={newEducations}
							removeItem={removeItem}
						/>
					))}
					<h2>
						<u>Experience</u>
					</h2>
					<button type="button" className="btn btn-secondary" onClick={updateJob}>
						Add Experience (optional)
					</button>
					{jobs.map((i) => (
						<ExperienceOutput key={i} number={i + 1} newJobs={newJobs} removeItem={removeItem} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
