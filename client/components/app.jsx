import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addGrade = this.addGrade.bind(this);
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
    for (let averageIndex = 0; averageIndex < this.state.grades.length; averageIndex++) {
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
        <main className="container col-12">
          <div className="row">
            <div className="col-lg-8 col-12">
              <GradeTable grades={this.state.grades} />
            </div>
            <div className="col-lg-4 col-12">
              <h4 className="mb-4 text-lg-left text-center">Add Grade</h4>
              <GradeForm addNewGrade={this.addGrade}/>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
