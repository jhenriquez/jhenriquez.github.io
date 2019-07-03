import './Menu.css';
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from '../Icons';

interface MenuPropTypes {
  match: any;
  icon?: ReactElement;
};

const getClasses = (item: string, activeItem: string) => {
  return classnames({
    'nav-item': true,
    'active': item === activeItem,
  });
};

const Menu: React.FC<MenuPropTypes> = ({icon, ...props}: MenuPropTypes) => {
  const activeItem = props.match.params.activeItem || 'welcome';

  return (
    <nav>
      <div className="text-nav">
        <Link to="/welcome" className={getClasses('welcome', activeItem)}>welcome</Link>
        <Link to="/about" className={getClasses('about', activeItem)}>about</Link>
        <Link to="/experience" className={getClasses('experience', activeItem)}>experience</Link>
        <Link to="/activities" className={getClasses('activities', activeItem)}>activities</Link>
      </div>
      {icon}
    </nav>
  );
}

Menu.propTypes = {
  match: PropTypes.object.isRequired,
  icon: PropTypes.element,
};

Menu.defaultProps = {
  icon: <MenuIcon />,
}

export default Menu;
