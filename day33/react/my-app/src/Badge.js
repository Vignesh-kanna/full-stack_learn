import React from 'react'
import { useState } from 'react'
const Badge = () => {
    const [users]=useState([
        {id:1,name:'prashanth', rank:1},
        {id:2,name:'ranjith', rank:2},
        {id:3,name:'bharath', rank:3},
        {id:4,name:'sharath', rank:4},
        {id:5,name:'vignesh', rank:5},
    ])
    const getUser=(rank)=>{
        switch(rank)
        {
        case 1:
            return <span>Gold</span>
        case 2:
            return <span>Silver</span>
        case 3:
            return <span>Bronze</span>
        default:
            return <span>Participants</span>
        }
    }
  return (
    <div>
      <table border="1" style={{borderCollapse:'collapse'}}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Rank</th>
            <th>Medal</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>{user.name}</td>
              <td>{user.rank}</td>
              <td>{getUser(user.rank)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Badge
