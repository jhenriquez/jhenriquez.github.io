import './SingleToolDisplay.css';
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export interface SingleToolDisplayPropTypes {
  icon?: ReactElement;
}

const SingleToolDisplay: React.FC<SingleToolDisplayPropTypes> = (props) => {
  const {icon} = props;

  if (!icon) {
    return <div />;
  }
  
  return (
    <div className="single-tool-display">
      <TransitionGroup>
        <CSSTransition
          key={Math.floor(Math.random()*100000000)}
          timeout={2000}>
          <i className="tool">{icon}</i>
        </CSSTransition>
      </TransitionGroup>
      
    </div>
  );
}

SingleToolDisplay.propTypes = {
  icon: PropTypes.element,
};

export default SingleToolDisplay;
