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

  getAverageGrade() {
    let sum = 0;
    for (var averageIndex = 0; averageIndex < this.state.grades.length; averageIndex++) {
      sum += this.state.grades[averageIndex].grade;
    }
    let averageGrade = sum / this.state.grades.length;
    if (isNaN(averageGrade)) {
      averageGrade = 'N/A';
    }
    return Math.round(averageGrade);
  }

  render() {
    return (
      <>
        <header>
          <div className="container col-12 my-4">
            <div className="row align-items-end">
              <Header averageGrade={this.getAverageGrade()}/>
            </div>
          </div>
        </header>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }
}

export default App;
