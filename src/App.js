import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./components/Header.js"

import Home from "./components/Home.js"
import Resume from "./components/Resume.js"
import Work from "./components/Work.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import UnderConstruction from "./components/UnderConstruction.js"

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/myresume" element={<Resume/>} />
                    <Route path="/mywork" element={<Work/>} />
                    <Route path="/aboutme" element={<About/>} />
                    <Route path="/contactme" element={<Contact/>} />
                    <Route path="/underconstruction" element={<UnderConstruction/>} />
                </Routes>
            </Router>
        )
    }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv)