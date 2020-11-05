import React, { Component } from 'react';

export default class GeneralInforView extends Component {
	render() {
		const { fullName, email, phone } = this.props;
		return (
			<div>
				<h2>{fullName}</h2>
				<h4>{email}</h4>
				<h4>{phone}</h4>
			</div>
		);
	}
}
