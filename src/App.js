import React, { useEffect } from 'react'; 
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { addDataToDatabase } from './firebase/firebase.ultils';

import './App.styles.scss';
import './mixins.scss';

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import ProjectsPage from './pages/projects/projects.page';
import ContactPage from './pages/contact/contact.page';
import Navigation from './components/navigation/navigation.component';


function App() {
    useEffect(() => {
      async function addDataToFirestore() {
        await addDataToDatabase();
      }
  
      addDataToFirestore()
    }, [])
  
  const location = useLocation();
  return (
    <div className="App">
      <Navigation  />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route  exact path={"/"} component={HomePage} />
          <Route  path={"/about"} component={AboutPage} />
          <Route  path={"/projects"} component={ProjectsPage} />
          <Route  path={"/contact"} component={ContactPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
