import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      courseInput: '',
      gradeInput: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      nameInput: event.target.value
    });
  }

  handleCourseChange(event) {
    this.setState({
      courseInput: event.target.value
    });
  }

  handleGradeChange(event) {
    this.setState({
      gradeInput: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.nameInput,
      course: this.state.courseInput,
      grade: this.state.gradeInput
    };
    this.props.onSubmit(newGrade);
    this.setState({
      nameInput: '',
      courseInput: '',
      gradeInput: ''
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      nameInput: '',
      courseInput: '',
      gradeInput: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input
            type="text"
            value={this.nameInput}
            className="form-control"
            name="name"
            placeholder="Student Name"
            aria-label="Student's Name"
            onChange={this.handleNameChange}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="far fa-list-alt"></i></span>
          </div>
          <input
            type="text"
            value={this.courseInput}
            className="form-control"
            name="course"
            placeholder="Student Course"
            aria-label="Student's Course"
            onChange={this.handleCourseChange}/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
          </div>
          <input
            type="number"
            value={this.gradeInput}
            className="form-control"
            name="grade"
            placeholder="Student Grade"
            aria-label="Student's Grade"
            onChange={this.handleGradeChange}/>
        </div>
        <button type="submit" className="btn btn-success mr-2">Add</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    );
  }
}
