import React, { useState } from 'react';

const Tabledata = () => {
  const [students] = useState([
    { sno: 1, name: 'karthik', course: 'aiml', fee: 150000 },
    { sno: 2, name: 'ram', course: 'python', fee: 250000 },
    { sno: 3, name: 'ravi', course: 'sap', fee: 35000 },
  ]);

  return (
    <div>
      <h2>Student Data:</h2>
      <table className='table' border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Course</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.sno}>
              <td>{student.sno}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabledata;