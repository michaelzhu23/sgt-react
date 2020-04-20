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

  addGrade(newGrade) {
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', request)
      .then(response => response.json())
      .then(grade => {
        const allGrades = this.state.grades.slice();
        allGrades.push(grade);
        this.setState({ grades: allGrades });
      })
      .catch(err => console.error(err));
  }

  getAverageGrade() {
    let sum = 0;
    for (var averageIndex = 0; averageIndex < this.state.grades.length; averageIndex++) {
      sum += this.state.grades[averageIndex].grade;
    }
    let averageGrade = sum / this.state.grades.length;
    if (isNaN(averageGrade)) {
      averageGrade = 'N/A';
      return averageGrade;
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
