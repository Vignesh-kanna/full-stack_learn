import React from 'react'
import {useState, useEffect} from 'react'
const ApiExample = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }, [])
  return (
    <div>
      <h2>User Data:</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ApiExample
