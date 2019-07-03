import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Menu from '../Menu';
import Welcome from '../Welcome';
import Footer from '../Footer';

const Root: React.FC = () => {
  return (
    <Router>
      <Route path="/:activeItem?" component={Menu} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/welcome" component={Welcome} />
      <Footer />
    </Router>
  );
}

export default Root;
