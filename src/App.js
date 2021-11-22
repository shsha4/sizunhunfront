import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [text, setText] = useState('테스트');

  useEffect(() => {
    axios.get('/test')
    .then((response) => {
      setText(response.data);
    })
  });

  return (
    <>
      <div>
        <h1>{text}</h1>
      </div>
    </>
  );
}

export default App;
