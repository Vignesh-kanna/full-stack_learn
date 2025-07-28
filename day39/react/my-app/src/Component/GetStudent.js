import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetPost = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [fee, setFee] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:3000/student')
      .then(response => setStudents(response.data))
      .catch(err => console.error('Error fetching students:', err));
  };

  const handleAddStudent = () => {
    if (!name || !course || !fee) {
      alert("All fields are required!");
      return;
    }

    const newStudent = {
      name: name,
      course: course,
      fee: parseInt(fee)
    };

    axios.post('http://localhost:3000/student', newStudent)
      .then(response => {
        setName('');
        setCourse('');
        setFee('');
        fetchStudents(); 
      })
      .catch(err => console.error('Error adding student:', err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Student List</h2>
      <hr />

      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Fee"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-success w-100" onClick={handleAddStudent}>Add Student</button>
        </div>
      </div>

      <ul className="list-group">
        {students.map(student => (
          <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{student.name}</strong> | Course: {student.course} | Fee: ₹{student.fee}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetPost;