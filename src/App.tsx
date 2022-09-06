import React from 'react';
import './App.css';
import {MainPanel} from "./component/panel/main-panel";
import {ProjectsPanel} from "./component/panel/projects-panel";
import {AboutPanel} from "./component/panel/about-panel";

function App() {
  return (
    <div className="App">
        <span className={"container background"}><MainPanel/></span>
        <span className={"container"} id={"projects"}><ProjectsPanel/></span>
        <span className={"container background"}><AboutPanel/></span>
    </div>
  );
}

export default App;
