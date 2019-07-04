import './SingleToolDisplay.css';
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export interface SingleToolDisplayPropTypes {
  icon: ReactElement;
  iconKey?: string;
}

const SingleToolDisplay: React.FC<SingleToolDisplayPropTypes> = (props) => {
  const {icon, iconKey} = props;

  return (
    <div className="single-tool-display">
      <TransitionGroup>
        <CSSTransition
          key={iconKey}
          timeout={2000}>
          <i className="tool">{icon}</i>
        </CSSTransition>
      </TransitionGroup>
      
    </div>
  );
}

SingleToolDisplay.propTypes = {
  icon: PropTypes.element.isRequired,
  iconKey: PropTypes.string,
};

export default SingleToolDisplay;
