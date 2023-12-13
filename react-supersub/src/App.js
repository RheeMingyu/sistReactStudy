import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';

function App() {

  const [idx,setIdx]=useState(1);

  const selectComponent=(e)=>{
    setIdx(Number(e.target.value));
  }

  return (
    <div className="App">
      <div style={{fontSize:'20px'}}>
        <label>
          <input type='radio' name='comp' defaultValue='1' defaultChecked onClick={selectComponent}/>&nbsp;OneApp
        </label>&nbsp;&nbsp;
        <label>
          <input type='radio' name='comp' defaultValue='2' onClick={selectComponent}/>&nbsp;TwoApp
        </label>&nbsp;&nbsp;
      </div>
      <hr/>
      {idx===1?<OneApp/>:<TwoApp/>}
    </div>
  );
}

export default App;
