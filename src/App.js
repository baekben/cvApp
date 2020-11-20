import React, { Component } from 'react';
import GeneralInfoOutput from './components/GeneralInfoOutput';
import EducationOutput from './components/EducationOutput';
import ExperienceOutput from './components/ExperienceOutput';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completedForm: true,
			eduNum: 1,
			jobNum: 1,
			newEducation: [],
			educations: [],
			newJob: [],
			jobs: [],
			buttonText: 'Submit',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.newEducation = this.newEducation.bind(this);
		this.newJob = this.newJob.bind(this);
		this.addJob = this.addJob.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.displayCV();
		this.setState({
			buttonText: 'Edit',
		});
	};

	displayCV = () => {
		const { completedForm } = this.state;
		this.setState({
			completedForm: !completedForm,
		});
	};

	addEducation = (education) => {
		this.setState({
			eduNum: this.state.eduNum + 1,
			educations: this.state.educations.concat(education),
		});
		console.log(this.addEducation);
	};

	addJob = (job) => {
		this.setState({
			jobNum: this.state.jobNum + 1,
			jobs: this.state.jobs.concat(job),
		});
		console.log(this.state.addJob);
	};

	newEducation = (education) => {
		this.setState({
			newEducation: this.state.newEducation.concat(education),
		});
	};

	updateEducation = (e) => {
		e.preventDefault();
		this.addEducation(this.newEducation);
	};

	newJob = (job) => {
		this.setState({
			newJob: this.state.newJob.concat(job),
		});
	};

	updateJob = (e) => {
		e.preventDefault();
		this.addJob(this.newJob);
	};

	render() {
		const educations = [];
		for (let i = 0; i < this.state.eduNum; i++) {
			educations.push(
				<EducationOutput
					key={i}
					number={i}
					completedForm={this.state.completedForm}
					newEducation={this.newEducation}
				/>
			);
		}
		const jobs = [];
		for (let i = 0; i < this.state.jobNum; i++) {
			jobs.push(
				<ExperienceOutput
					key={i}
					number={i}
					completedForm={this.state.completedForm}
					jobs={this.newJob}
				/>
			);
		}
		return (
			<div className="col-6 mx-auto mt-5">
				<header>
					<h1>CV/Resume Builder</h1>
				</header>
				<div>
					<form>
						<GeneralInfoOutput
							completedForm={this.state.completedForm}
							onChange={this.handleChange}
						/>
						<h2>
							<u>School</u>
						</h2>
						<button type="submit" className="btn btn-secondary" onClick={this.updateEducation}>
							Add Education
						</button>
						{educations}
						<h2>
							<u>Experience</u>
						</h2>
						<button className="btn btn-secondary" id="jobBtn" onClick={this.updateJob}>
							Add Experience (optional)
						</button>
						{jobs}
						<div>
							<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
								{this.state.buttonText}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default App;
