import React from 'react'; 
import {Route, Switch} from 'react-router-dom';

import './App.styles.scss';

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import ProjectsPage from './pages/projects/projects.page';
import ContactPage from './pages/contact/contact.page';
import Navigation from './components/navigation/navigation.component';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route  exact path={"/"} component={HomePage} />
        <Route  path={"/about"} component={AboutPage} />
        <Route  path={"/projects"} component={ProjectsPage} />
        <Route  path={"/contact"} component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
