import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Page1 from './component/Page1';
import Page2 from './component/Page2';

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
      <div style={{textAlign: "center", marginTop: "1em"}}>
      Link : &nbsp;
      <span style={{border: "1px solid black"}}>
        <Link to="/">HOME</Link>&nbsp;
        <Link to="/page1">Page1</Link>&nbsp;
        <Link to="/page2">Page2</Link>&nbsp;
      </span>
      &nbsp; a 태그 : &nbsp;
      <span style={{border: "1px solid black"}}>
        <a href="/">HOME</a>&nbsp;
        <a href="/page1">Page1</a>&nbsp;
        <a href="/page2">Page2</a>&nbsp;
      </span>
      </div>
      <div>
        <h1>{text}</h1>
      </div>
      <Routes>
        <Route path="/page1" element={<Page1 />}/>
        <Route path="/page2" element={<Page2 />}/>
      </Routes>
    </>
  );
}

export default App;
