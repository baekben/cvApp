import React, { useState } from 'react';
import Experience from './Experience';
import ExperienceView from './ExperienceView';
import { nanoid } from 'nanoid';

export default function ExperienceOutput({ number, newJobs, removeItem }) {
	const id = nanoid();
	const [company, setCompany] = useState('');
	const [position, setPosition] = useState('');
	const [tasks, setTask] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [completedForm, setCompletedForm] = useState(true);
	const [buttonText, setButtonText] = useState('submit');
	const [allState, setAllState] = useState({
		id: id,
		company: company,
		position: position,
		tasks: tasks,
		startDate: startDate,
		endDate: endDate,
	});

	const handleChange = (e) => {
		if (e.target.id === 'company') {
			setCompany(e.target.value);
		}
		if (e.target.id === 'position') {
			setPosition(e.target.value);
		}
		if (e.target.id === 'tasks') {
			setTask(e.target.value);
		}
		if (e.target.id === 'startDate') {
			setStartDate(e.target.value);
		}
		if (e.target.id === 'endDate') {
			setEndDate(e.target.value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setAllState({ ...allState });
		console.log(newJobs);
		newJobs(allState);
		displayCV();
		if (completedForm) {
			setButtonText('Edit');
		} else {
			setButtonText('Submit');
		}
	};

	const displayCV = () => {
		setCompletedForm(!completedForm);
	};

	const deleteItem = (e) => {
		removeItem(e.target.id, 'job');
	};

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
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				) : (
					<ExperienceView
						company={company}
						position={position}
						tasks={tasks}
						startDate={startDate}
						endDate={endDate}
						deleteItem={deleteItem}
					/>
				)}
			</div>
			<div>
				<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
					{buttonText}
				</button>
				<button type="button" id={number} onClick={deleteItem}>
					Delete
				</button>
			</div>
		</div>
	);
}
