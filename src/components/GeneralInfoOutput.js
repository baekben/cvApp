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
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	render() {
		const { fullName, email, phone } = this.state;
		const { completedForm } = this.props;
		return completedForm ? (
			<GeneralInfo
				fullName={fullName}
				email={email}
				phone={phone}
				handleChange={this.handleChange}
			/>
		) : (
			<GeneralInfoView fullName={fullName} email={email} phone={phone} />
		);
	}
}
