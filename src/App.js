import React, { Component } from 'react';
import GeneralInfoOutput from './components/GeneralInfoOutput';
import EducationOutput from './components/EducationOutput';
import ExperienceOutput from './components/ExperienceOutput';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completedForm: true,
			jobNum: 1,
			jobs: [],
			buttonText: 'Submit',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	addJob = (job) => {
		this.setState({
			jobNum: this.state.jobNum + 1,
			jobs: this.state.jobs.concat(job),
		});
		console.log('Job/experience Added');
	};

	render() {
		const jobs = [];
		for (let i = 0; i < this.state.jobNum; i++) {
			jobs.push();
		}
		return (
			<div className="col-6 mx-auto mt-5">
				<header>
					<h1>CV/Resume Builder</h1>
				</header>
				<div>
					<form>
						<h2>
							<u>Education</u>
						</h2>
						<GeneralInfoOutput
							completedForm={this.state.completedForm}
							onChange={this.handleChange}
						/>
						<h2>
							<u>Education</u>
						</h2>
						<EducationOutput completedForm={this.completedForm} />
						<h2>
							<u>Experience</u>
						</h2>
						<ExperienceOutput completedForm={this.completedForm} />
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
