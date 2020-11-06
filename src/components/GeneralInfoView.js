import React, { Component } from 'react';

export default class GeneralInforView extends Component {
	render() {
		const { fullName, email, phone } = this.props;
		return (
			<div>
				<h2>Name: {fullName}</h2>
				<h4>Email: {email}</h4>
				<h4>Phone: {phone}</h4>
			</div>
		);
	}
}
