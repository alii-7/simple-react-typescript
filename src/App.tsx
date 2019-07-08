import React from 'react';
import './App.css';
import Hello from './components/Hello'
import Helloo from './components/Helloo'
import Hellooo from './components/Hellooo'

export interface Object{
  name: string,
  enthusiasmLevel:number
}

const App: React.FC = () => {
  const obj: Object = {
    name:'test',
    enthusiasmLevel:5
  }
  return (
    <div className="App">
      <Hello {...obj}/>
      <Helloo {...obj} />
      <Hellooo {...obj} />
    </div>
  );
}

export default App;
