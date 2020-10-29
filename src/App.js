import React, {Component} from 'react';
import GeneralInfo from "./components/GeneralInfo";
import Education from './components/Education'
import Experience from './components/Experience';

class App extends Component {


  render() {
    // const { firstName, lastName,fullName,email,phone } = this.state;

    return (
      <div className="col-6 mx-auto mt-5">
        <form>
          <div className="form-group">
            <GeneralInfo />
            <Education />
            <Experience />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit CV
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;