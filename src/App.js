import './App.css';
import React from 'react';
import { useState } from 'react';
// import UseStateComponent from './Components/UseStateComputer';
// import TodoList from './Components/TodoList';
import Content from './Components/Mounted_Unmounted';
function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 12}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App;
