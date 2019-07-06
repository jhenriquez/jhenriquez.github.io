import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import OverlayMenu from '../OverlayMenu';
import Menu from '../Menu';
import Home from '../../views/Home';
import Footer from '../Footer';

const Root: React.FC = () => {
  const [showOverlayedMenu, setShowOverlayedMenu] = useState(false);
  return (
    <BrowserRouter>
      { 
        showOverlayedMenu &&
        <Route path="/:activeItem?" render={(props) => <OverlayMenu {...props} onCloseOverlay={() => setShowOverlayedMenu(false)} />} />
      }
      <Route path="/:activeItem?" render={(props) => (
        <Menu
          {...props} 
          onToggleOverlay={setShowOverlayedMenu}
          showingOverlayMenu={showOverlayedMenu}
          />
        )} />
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
