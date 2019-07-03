import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from '../Menu';
import Welcome from '../../views/Welcome';
import About from '../../views/About';
import Footer from '../Footer';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/:activeItem?" component={Menu} />
      <Route render={({location}) => (
        <TransitionGroup enter={true} exit={false} appear={true}>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="view"
            >
            <Switch location={location}>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/about" component={About} />
              <Route exact path="/experience" render={() => null} />
              <Route exact path="/activities" render={() => null} />
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
