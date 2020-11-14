import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';

class Output extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completedForm: true,
			fullName: '',
			email: '',
			phone: '',
			eduNum: 1,
			jobNum: 1,
			educations: [],
			jobs: [],
			displayForm: 'true',
		};
		this.add = this.add.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};


	add = (e) => {
		e.preventDefault();
		if (e.target.id === 'schoolBtn') {
			//add school
			this.setState({
				eduNum: this.state.eduNum + 1,
			});
			console.log(this.state.eduNum);
		}
		if (e.target.id === 'jobBtn') {
			//add job
			console.log('job');
			this.setState({
				jobNum: this.state.jobNum + 1,
			});
		}
	};

	render() {
		const educations = [];
		for (let i = 0; i < this.state.eduNum; i++) {
			educations.push(
				<Education key={i} number={i + 1} handleChange={this.handleChange}></Education>
			);
		}
		const jobs = [];
		for (let i = 0; i < this.state.jobNum; i++) {
			jobs.push(<Experience key={i} number={i + 1} handleChange={this.handleChange}></Experience>);
		}

		return (
			<div>
				<div >
					<header>
						<h1>CV/Resume Builder</h1>
					</header>
					<div>
						<form>
							<h2>
								<u>General Info</u>
							</h2>

							<div className="form-group">
								<GeneralInfo
									fullName={this.fullName}
									email={this.email}
									phone={this.phone}
									handleChange={this.handleChange}
								/>
							</div>
							<h2>
								<u>Education</u>
							</h2>

							<div className="form-group">
								{educations}
								<button className="btn btn-secondary" id="schoolBtn" onClick={this.add}>
									Add Education (optional)
								</button>
							</div>
							<h2>
								<u>Experience</u>
							</h2>

							<div className="form-group">
								{jobs}
								<button className="btn btn-secondary" id="jobBtn" onClick={this.add}>
									Add Experience (optional)
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Output;
