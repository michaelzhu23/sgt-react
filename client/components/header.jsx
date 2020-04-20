import React from 'react';

export default function Header(props) {
  return (
    <>
      <h1 className="col-lg-6 col-12 text-lg-left text-center">Student Grade Table</h1>
      <h3 className="col-lg-6 col-12 text-lg-right text-center">Average Grade <span className="badge badge-secondary">{props.averageGrade}</span></h3>
    </>
  );
}
