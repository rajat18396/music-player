import React from "react";

import "./App.scss";

import Nav from "./components/Nav";
import Care from "./addSong/AddSong";
import Search from "./createSearch/Search";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />


        <Route path="/" exact component={Search} />
        <Route path="/addsong" component={Care} />
      </div>
    </Router>
  );
}

export default App;
