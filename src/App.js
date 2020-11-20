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
			educations: [],
			jobs: [],
			buttonText: 'Submit',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addEducation = this.addEducation.bind(this);
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
		console.log(this.state.addEducation);
	};

	addJob = (job) => {
		this.setState({
			jobNum: this.state.jobNum + 1,
			jobs: this.state.jobs.concat(job),
		});
		console.log(this.state.addJob);
	};

	render() {
		const educations = [];
		for (let i = 0; i < this.state.eduNum; i++) {
			educations.push(
				<EducationOutput
					key={i}
					number={i}
					completedForm={this.state.completedForm}
					educations={this.addEducation}
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
					jobs={this.addJob}
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
						{educations}

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
