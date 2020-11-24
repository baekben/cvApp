import React, { Component } from 'react';
import Experience from './Experience';
import ExperienceView from './ExperienceView';
import { nanoid } from 'nanoid';

export default class ExperienceOutput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: nanoid(),
			company: '',
			position: '',
			tasks: '',
			startDate: '',
			endDate: '',
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
		this.props.newJob(this.state);
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

	deleteItem = (e) => {
		this.props.removeItem(e.target.id, 'job');
	};

	render() {
		const { completedForm, company, position, tasks, startDate, endDate } = this.state;
		const { number } = this.props;
		return (
			<div>
				<div>
					{completedForm ? (
						<Experience
							number={number}
							company={company}
							position={position}
							tasks={tasks}
							startDate={startDate}
							endDate={endDate}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
					) : (
						<ExperienceView
							company={company}
							position={position}
							tasks={tasks}
							startDate={startDate}
							endDate={endDate}
							deleteItem={this.deleteItem}
						/>
					)}
				</div>
				<div>
					<button type="submit" className="btn btn-primary" onclick={this.handleSubmit}>
						{this.state.buttonText}
					</button>
					<button type="button" id={number} onClick={this.deleteItem}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}
