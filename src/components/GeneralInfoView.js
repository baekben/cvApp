import React, { Component } from 'react';

export default class GeneralInforView extends Component {
	render() {
		const { fullName, email, phone } = this.props;
		return (
			<div class="border-bottom border-dark">
				<h2>Name: {fullName}</h2>
				<div class="row">
					<h4 class="col-md-4">Email: {email}</h4>
					<h4 class="col-md-4">Phone: {phone}</h4>
				</div>
			</div>
		);
	}
}
