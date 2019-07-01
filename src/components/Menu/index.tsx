import './Menu.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

interface MenuPropTypes {
  match: any;
};

const getClasses = (item: string, activeItem: string) => {
  return classnames({
    'nav-item': true,
    'active': item === activeItem,
  });
};

const Menu: React.FC<MenuPropTypes> = (props: MenuPropTypes) => {
  const activeItem = props.match.params.activeItem || 'welcome';

  return (
    <nav className="main-nav">
      <Link to="/welcome" className={getClasses('welcome', activeItem)}>welcome</Link>
      <Link to="/about" className={getClasses('about', activeItem)}>about</Link>
      <Link to="/experience" className={getClasses('experience', activeItem)}>experience</Link>
      <Link to="/activities" className={getClasses('activities', activeItem)}>activities</Link>
    </nav>
  );
}

Menu.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Menu;
