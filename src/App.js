import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 10;
  apikey = process.env.REACT_APP_APIKEY
state ={
  progress: 0
}
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
 
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

          <Routes>
            <Route exact path="/"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="generall" pagesize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment"  pagesize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.pageSize} country="in" category="technology" />} />

          </Routes>
        </Router>
      </div>
    )
  }
}



