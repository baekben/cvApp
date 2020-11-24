import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import GeneralInfoView from './GeneralInfoView';

export default class GeneralInfoOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			email: '',
			phone: '',
			completedForm: true,
			buttonText: 'Submit',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.displayCV();
		if (this.state.completedForm) {
			this.setState({
				buttonText: 'Edit',
			});
		} else {
			this.setState({
				buttonText: 'Submit',
			});
		}
	};
	displayCV = () => {
		const { completedForm } = this.state;
		this.setState({
			completedForm: !completedForm,
		});
	};

	render() {
		const { fullName, email, phone, completedForm } = this.state;
		return (
			<div>
				<div>
					{completedForm ? (
						<GeneralInfo
							fullName={fullName}
							email={email}
							phone={phone}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
					) : (
						<GeneralInfoView fullName={fullName} email={email} phone={phone} />
					)}
				</div>
				<div>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						{this.state.buttonText}
					</button>
				</div>
			</div>
		);
	}
}
