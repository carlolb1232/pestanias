import { useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Tab from './Components/Tab';

function App() {
  const [index, setIndex] = useState(1);

  const getIndex = (index)=>{
    setIndex(index)
  }
  return (
    <div className="App">
      <Tab cantidad={6} onIndex={getIndex}/>
      <Content tabNumber={index}/>
    </div>
  );
}

export default App;
