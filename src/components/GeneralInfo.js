import React, { Component } from 'react';

class GeneralInfo extends Component {
	render() {
		const { fullName, email, phone, handleChange, handleSubmit } = this.props;
		return (
			<form color="bg-secondary" className="form-group" onSubmit={handleSubmit}>
				<h2>
					<u>General Info</u>
				</h2>
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
			</form>
		);
	}
}

export default GeneralInfo;
