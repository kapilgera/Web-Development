
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App =()=> {

const apiKey = process.env.REACT_APP_API_KEY;

const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" category="general" apiKey={apiKey}/>}/> 
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" apiKey={apiKey}/>}/> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" apiKey={apiKey}/>}/> 
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" apiKey={apiKey}/>}/> 
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" apiKey={apiKey}/>}/> 
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" apiKey={apiKey}/>}/> 
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" apiKey={apiKey}/>}/> 
        </Routes>
        </Router>
      </div>
    )
  
}

export default App