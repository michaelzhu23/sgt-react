import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      courseInput: '',
      gradeInput: ''
    };
  }

  render() {
    return (
      <form>
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
            aria-label="Student's Name"/>
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
            aria-label="Student's Course"/>
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
            aria-label="Student's Grade"/>
        </div>
        <button type="submit" className="btn btn-success mr-2">Add</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    );
  }
}
