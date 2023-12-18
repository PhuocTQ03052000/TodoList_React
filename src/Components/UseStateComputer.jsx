import React, { useState } from "react"

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function UseStateComponent() {
  const  [checked, setChecked] = useState([]);

  const handleSubmit = ()  => {
    //call api
    console.log( {ids: checked} )
  }

  const handleChecked = (id)  => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if(isChecked){
        //unchecked
        return checked.filter(item => item !== id);
      }else{
       return [...prev, id]
      }
    });

  }

  return (
    <div style={{padding: 32}} >
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox" 
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default UseStateComponent;
