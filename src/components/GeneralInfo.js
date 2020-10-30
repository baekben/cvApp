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
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
		console.log(this.state);
	};
	render() {
		const { fullName, email, phone } = this.state;

		return (
			<div>
				<h2>
					<u>General Info</u>
				</h2>
				<form>
					{' '}
					<div className="form-group">
						<input
							type="text"
							id="fullName"
							onChange={this.handleChange}
							placeholder="Full Name"
							value={fullName}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							placeholder="Email"
							value={email}
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<input
							type="tel"
							id="phone"
							onChange={this.handleChange}
							placeholder="Phone Number: (xxx)-xxx-xxxx"
							value={phone}
							className="form-control"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
		);
	}
}

export default GeneralInfo;
