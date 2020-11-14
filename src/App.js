import React, { Component } from 'react';
import Output from './components/Output';
import GeneralInfoView from './components/GeneralInfoView';
import EducationView from './components/EducationView';
import ExperienceView from './components/ExperienceView';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completedForm: true,
			displayForm: 'true',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
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
		return (
			<div>
				{this.state.completedForm && (
					<div className="col-6 mx-auto mt-5">
						<Output />
						<div>
							<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
								Submit
							</button>
						</div>
					</div>
				)}
				{!this.state.completedForm && (
					<div className="col-6 mx-auto mt-5">
						<GeneralInfoView></GeneralInfoView>
						<EducationView></EducationView>
						<ExperienceView></ExperienceView>
						<div>
							<button type="submit" onClick={this.displayCV}>
								Edit
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default App;
