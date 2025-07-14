import React from 'react'

const ListComponent = () => {
    const students=[
        {Sno:1,name:'siddu',course:'react',fee:9000},
        {Sno:1,name:'siddu',course:'react',fee:9000},
        {Sno:1,name:'siddu',course:'react',fee:9000},

    ]
  return (
    <div>
        <hr/>
      <h2>List in React:</h2>
      {
        students.length>0 ?(students.map(student=>
        <li key={student.Sno}>{student.name}</li>)):(<p>no record found</p>)
      }
    </div>
  )
}

export default ListComponent
