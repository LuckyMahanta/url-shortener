import './App.css';
import Inputshortener from './components/home/Inputshortener';
import LinkResult from './components/result/LinkResult';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue]=useState("");

  return (
    <div className="container">
      <Inputshortener setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
