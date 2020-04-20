import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }));
  }

  render() {
    return (
      <>
        <header>
          <div className="container col-12 my-4">
            <div className="row align-items-end">
              <Header/>
            </div>
          </div>
        </header>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }
}

export default App;
