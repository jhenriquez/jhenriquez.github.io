import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export interface MenuItemListPropTypes {
  itemClassName: string;
  onItemClick?: (value: any)=>void;
  activeItem: string;
}

const getClasses = (itemClassName: string, item: string, activeItem: string) => {
  return classnames({
    [itemClassName]: true,
    'active': item === activeItem,
  });
};

export const MenuItemList: React.FC<MenuItemListPropTypes> = (props: MenuItemListPropTypes) => {
  const {onItemClick, itemClassName, activeItem} = props;
  const NAVIGATION_ROUTES = ['home', 'about', 'skills', 'activity'];

  return (
    <React.Fragment>
      {
        NAVIGATION_ROUTES.map((route) => (
          <Link
            key={`route-${route}`}
            to={`/${route}`}
            className={getClasses(itemClassName, route, activeItem)}
            onClick={onItemClick}
            >
            {route}
          </Link>))
      }
    </React.Fragment>
  );
};

MenuItemList.propTypes = {
  itemClassName: PropTypes.string.isRequired,
  onItemClick: PropTypes.func,
  activeItem: PropTypes.string.isRequired,
};

MenuItemList.defaultProps = {
  onItemClick: ()=>{},
};

export default MenuItemList;