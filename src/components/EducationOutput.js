import React, { useState } from 'react';
import Education from './Education';
import EducationView from './EducationView';
import { nanoid } from 'nanoid';

export default function EducationOutput({ number, newEducation, removeItem }) {
	const id = nanoid();
	const [school, setSchool] = useState('');
	const [degree, setDegree] = useState('');
	const [gradDate, setGradDate] = useState('');
	const [completedForm, setCompletedForm] = useState(true);
	const [buttonText, setButtonText] = useState('submit');
	const [allState, setAllState] = useState({
		id: id,
		school: school,
		degree: degree,
		gradDate: gradDate,
	});

	const handleChange = (e) => {
		if (e.target.id === 'school') {
			setSchool(e.target.value);
		}
		if (e.target.id === 'degree') {
			setDegree(e.target.value);
		}
		if (e.target.id === 'gradDate') {
			setGradDate(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setAllState({ ...allState });
		newEducation(allState);
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
		removeItem(e.target.id, 'edu');
	};

	return (
		<div>
			<div>
				{completedForm ? (
					<Education
						number={number}
						school={school}
						degree={degree}
						gradDate={gradDate}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						deleteItem={deleteItem}
					/>
				) : (
					<EducationView
						school={school}
						degree={degree}
						gradDate={gradDate}
						deleteItem={deleteItem}
					/>
				)}
			</div>

			<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
				{buttonText}
			</button>
			<button type="button" id={number} onClick={deleteItem}>
				Delete
			</button>
		</div>
	);
}
