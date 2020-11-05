import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Output from './components/Output';

class App extends Component {
	constructor() {
		super();
		this.state = {
			completedForm: true,
			fullName: '',
			email: '',
			phone: '',
			school: '',
			degree: '',
			gradDate: '',
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.displayCV();
	};

	displayCV = () => {
		const { completedForm } = this.state;
		this.setState({
			completedForm: !completedForm,
		});
	};

	render() {
		const {
			fullName,
			email,
			phone,
			school,
			degree,
			gradDate,
			completedForm,
			company,
			position,
			tasks,
			startDate,
			endDate,
		} = this.state;
		return completedForm ? (
			<div className="col-6 mx-auto mt-5">
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<GeneralInfo
								fullName={fullName}
								email={email}
								phone={phone}
								handleChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<Education
								school={school}
								degree={degree}
								gradDate={gradDate}
								handleChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<Experience
								company={company}
								position={position}
								tasks={tasks}
								startDate={startDate}
								endDate={endDate}
								handleChange={this.handleChange}
							/>
						</div>
						<div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
							<button className="btn btn-primary">Edit</button>
						</div>
					</form>
				</div>
			</div>
		) : (
			<Output
				fullName={fullName}
				email={email}
				phone={phone}
				school={school}
				degree={degree}
				gradDate={gradDate}
				company={company}
				position={position}
				tasks={tasks}
				startDate={startDate}
				endDate={endDate}
			/>
		);
	}
}

export default App;
