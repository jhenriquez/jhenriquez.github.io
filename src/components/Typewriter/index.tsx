import './Typewriter.css';
import React from 'react';
import PropTypes from 'prop-types';

interface TypewriterPropTypes {
  text: String;
  prompt?: String;
}

const Typewriter: React.FC<TypewriterPropTypes> = (props: TypewriterPropTypes) => {
  return (
    <div key={Math.floor(Math.random()*100000000)} className="typewriter">
      <span className="prompt">{`${props.prompt} `}</span>
      <span className="content">{props.text}</span>
    </div>
  );
}

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  prompt: PropTypes.string,
};

Typewriter.defaultProps = {
  prompt: '$',
};

export default Typewriter;