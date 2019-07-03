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
  const activeItem = props.match.params.activeItem || 'home';
  const routes = ['home', 'about', 'skills', 'activity'];

  return (
    <nav>
      <div className="text-nav">
        {
          routes.map((route) => <Link to={`/${route}`} className={getClasses(route, activeItem)}>{route}</Link>)
        }
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
