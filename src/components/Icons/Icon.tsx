import PropTypes from 'prop-types';

export interface IconPropTypes {
  width?: number;
  height?: number;
}

export const propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export const defaultProps =  {
  height: 200,
  width: 200,
};