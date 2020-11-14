import React, { Component } from 'react';

export default class GeneralInforView extends Component {
	render() {
		const { fullName, email, phone } = this.props;
		return (
			<div className="border-bottom border-dark">
				<h2>{fullName}</h2>
				<div className="row">
					<h4 className="col-md-6">Email: {email}</h4>
					<h4 className="col-md-6">Phone: {phone}</h4>
				</div>
			</div>
		);
	}
}
