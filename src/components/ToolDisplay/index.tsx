import './ToolDisplay.css';
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export interface ToolDisplayPropTypes {
  icon: ReactElement;
  iconKey?: string;
}

const ToolDisplay: React.FC<ToolDisplayPropTypes> = (props) => {
  const {icon, iconKey} = props;

  return (
    <div className="tool-display">
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

ToolDisplay.propTypes = {
  icon: PropTypes.element.isRequired,
  iconKey: PropTypes.string,
};

export default ToolDisplay;
