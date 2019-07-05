import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from '../Menu';
import Home from '../../views/Home';
import Footer from '../Footer';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/:activeItem?" component={Menu} />
      <Route render={({location}) => (
        <TransitionGroup enter={true} exit={false} appear={true}>
          <CSSTransition
            key={location.key}
            timeout={2000}
            classNames="view"
            >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={() => null} />
              <Route exact path="/skills" render={() => null} />
              <Route exact path="/activity" render={() => null} />
              <Redirect to="/" />
            </Switch>  
          </CSSTransition>
        </TransitionGroup>
      )}/>
      <Footer />
    </BrowserRouter>
  );
}

export default Root;
