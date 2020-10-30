import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {

	render() {
		return (
			<div className="col-6 mx-auto mt-5">
					<div>
						<GeneralInfo />
						<Education />
						<Experience />
					</div>
			</div>
		);
	}
}

export default App;
