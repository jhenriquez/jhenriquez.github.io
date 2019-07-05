import React from 'react';
import PropTypes from 'prop-types';
import classnames from  'classnames';
import Typist from 'react-typist';
import PrismCode from 'react-prism';

export interface CodeDisplayPropTypes {
  snippet: string;
  lang: string;
  className?: string;
}

const CodeDisplay: React.FC<CodeDisplayPropTypes> = (props: CodeDisplayPropTypes) => {
  const {snippet, lang, className} = props;
  const classes = classnames(['code-display', className]);
  
  return (
    <div className={classes}>
      <Typist cursor={{show: false}}>
        <pre className="line-numbers">
          <PrismCode className={`language-${lang}`}>
            {snippet}
          </PrismCode>
        </pre>
      </Typist>
    </div>
  );
}

CodeDisplay.propTypes = {
  snippet: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CodeDisplay.defaultProps = {
  className: '',
};

export default CodeDisplay;