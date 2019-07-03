import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from '../Menu';
import Welcome from '../../views/Welcome';
import Footer from '../Footer';

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/:activeItem?" component={Menu} />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Root;
