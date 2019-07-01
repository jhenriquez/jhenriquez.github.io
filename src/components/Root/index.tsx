import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Menu from '../Menu';
import Welcome from '../Welcome';

const Root: React.FC = () => {
  return (
    <Router>
      <Route path="/:activeItem?" component={Menu} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/welcome" component={Welcome} />
    </Router>
  );
}

export default Root;
