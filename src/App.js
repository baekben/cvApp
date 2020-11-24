import React, { Component } from 'react';
import GeneralInfoOutput from './components/GeneralInfoOutput';
import EducationOutput from './components/EducationOutput';
import ExperienceOutput from './components/ExperienceOutput';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eduNum: 1,
			jobNum: 1,
			newEducation: [],
			educations: [],
			newJob: [],
			jobs: [],
		};
		this.addEducation = this.addEducation.bind(this);
		this.newEducation = this.newEducation.bind(this);
		this.newJob = this.newJob.bind(this);
		this.addJob = this.addJob.bind(this);
	}

	addEducation = (education) => {
		this.setState({
			eduNum: this.state.eduNum + 1,
			educations: [...this.state.educations, education],
		});
	};

	addJob = (job) => {
		this.setState({
			jobNum: this.state.jobNum + 1,
			jobs: [...this.state.jobs, job],
		});
	};

	newEducation = (education) => {
		this.setState({
			newEducation: [...this.state.newEducation, education],
		});
	};

	updateEducation = () => {
		this.addEducation(this.state.newEducation);
	};

	newJob = (job) => {
		this.setState({
			newJob: [...this.state.newJob, job],
		});
	};

	updateJob = () => {
		this.addJob(this.state.newJob);
	};

	removeItem = (index, type) => {
		let tempList;
		if (type === 'edu') {
			console.log('remove edu ' + index);
			tempList = this.state.educations;
			tempList.splice(index, 1);
			this.setState({ educations: tempList });
		}
		if (type === 'job') {
			console.log('remove job ' + index);
			tempList = this.state.jobs;
			tempList.splice(index, 1);
			this.setState({ jobs: tempList });
		}
	};

	render() {
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
						<button className="btn btn-secondary" type="button" onClick={this.updateEducation}>
							Add Education
						</button>
						{this.state.educations.map((edu, i) => (
							<EducationOutput
								key={i}
								number={i + 1}
								edu={edu}
								index={i}
								newEducation={this.newEducation}
								removeItem={this.removeItem}
							/>
						))}
						<h2>
							<u>Experience</u>
						</h2>
						<button type="button" className="btn btn-secondary" onClick={this.updateJob}>
							Add Experience (optional)
						</button>
						{this.state.jobs.map((i) => (
							<ExperienceOutput
								key={i}
								number={i + 1}
								completedForm={this.state.completedForm}
								jobs={this.newJob}
								removeItem={this.removeItem}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
