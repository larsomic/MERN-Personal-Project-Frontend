import React, { Component } from "react";
import { render } from "react-dom";
import { createRoot } from 'react-dom/client';

import Home from "./Home.js"
import Resume from "./Resume.js"
import Work from "./Work.js"
import About from "./About.js"
import Contact from "./Contact.js"
import UnderConstruction from "./UnderConstruction.js"

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

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);