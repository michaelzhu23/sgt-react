/* eslint-disable no-unused-vars */

import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
    </tr>
  );
}

export default function GradeTable(props) {
  let noGrades;
  if (!props.grades.length) {
    noGrades = <p>No Grades Recorded</p>;
  }
  return (
    <>
      <table className="table table-striped mb-4">
        <thead className="thead-dark">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            props.grades.map(grade => {
              return (
                <Grade
                  key={grade.id}
                  grade={grade}
                />
              );
            })
          }
        </tbody>
      </table>
      {noGrades}
    </>
  );
}
