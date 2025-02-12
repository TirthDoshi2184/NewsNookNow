import './App.css';

import React, { Component,useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =(props)=> {
  const apiKey = '82903259b9c84eedb59a9bc06d05786a';
  const [Progress, setProgress] = useState()
    return (
      <div>
        <Router>
          <LoadingBar
          height={3}
          color='#f11946'
          progress={Progress}
          />
          <NavBar/>
          <Routes>
            <Route exact path="/general" element= {<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country='us' category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={5} country='us' category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} country='in' category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health"  pageSize={5} country='in' category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={5} country='in' category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports"  pageSize={5} country='in' category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} country='in' category="technology"/>}></Route>
            </Routes>
        </Router>
      </div>
    )
  }

export  default App;