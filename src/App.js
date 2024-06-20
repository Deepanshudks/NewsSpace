// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const [pageSize, setpageSize] = useState(10);
 const apikey = process.env.REACT_APP_APIKEY;
 const [progress, setProgress] = useState(0);
 const [mode, setmode] = useState("Night");
 const [nav, setnav] = useState("white")
  const [color, setcolor] = useState("white")
  const handletoggle = ()=>{
    if(mode === "Night"){
      setmode("Light")
      setcolor("dark")
      setnav("secondary")
    }
    else{
      setmode("Night")
      setcolor("white")
      setnav("white")
    }
  }
 
    return (
      <div className={`text-${(color==="dark")?"white":"dark"} bg-${color} bg-body-${color}`}>
        <Router>
          <Navbar nav={nav} mode={mode} handletoggle={handletoggle} color={color} />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />

          <Routes>
            <Route exact path="/"  element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="general" pagesize={pageSize} country="in" category="general" />} />
            <Route exact path="/general" element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="generall" pagesize={pageSize} country="in" category="general" />} />
            <Route exact path="/business"  element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="business" pagesize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="entertainment"  pagesize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health"  element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="health" pagesize={pageSize} country="in" category="health" />} />
            <Route exact path="/science"  element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="science" pagesize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports"  element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="sports" pagesize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology"  element={<News nav={nav} handletoggle={handletoggle} color={color} setProgress={setProgress} apikey={apikey} key="technology" pagesize={pageSize} country="in" category="technology" />} />

          </Routes>
        </Router>
      </div>
    )
  
}

export default App;



