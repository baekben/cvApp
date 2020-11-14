import React, { Component } from 'react';

class GeneralInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			email: '',
			phone: '',
		};
	}
	render() {
		const { fullName, email, phone, handleChange } = this.props;

		return (
			<div color="bg-secondary">
				<input
					type="text"
					id="fullName"
					onChange={handleChange}
					placeholder="Full Name"
					value={fullName}
					className="form-control"
				/>
				<input
					type="email"
					id="email"
					onChange={handleChange}
					placeholder="Email"
					value={email}
					className="form-control"
				/>
				<input
					type="tel"
					id="phone"
					onChange={handleChange}
					placeholder="Phone Number: XXX-XXX-XXXX"
					value={phone}
					className="form-control"
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
				/>
			</div>
		);
	}
}

export default GeneralInfo;
