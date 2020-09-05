import React from 'react';
import Layout from '../Layout/layout'
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home/Home';
// import About from '../About/About';
import Menu from '../containers/Menu/Menu';
import Projects from './Projects/Projects';
import './PageAnimation.css';



const App = () => {
  return (
    <>
      <Layout>
        <Menu />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <Switch location={location}>
                <Route
                  exact path="/"
                  component={() => <Home />} />
                <Route path="/projects/" component={() => <Projects />} />
              </Switch>


            </CSSTransition>
          </TransitionGroup>
        )} />

      </Layout>
    </>

  );
}

export default App;