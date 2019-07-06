import './Menu.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuItemList from '../MenuItemList';

interface MenuPropTypes {
  match: any;
  onToggleOverlay?: (value:boolean) => void;
  showingOverlayMenu: boolean;
};

const Menu: React.FC<MenuPropTypes> = (props: MenuPropTypes) => {
  const {onToggleOverlay, match, showingOverlayMenu} = props;
  const activeItem = match.params.activeItem || 'home';

  const iconNavClasses = {
    'icon-nav': true,
    'pushed': showingOverlayMenu,
  };

  return (
    <nav className="main-menu">
      <div
        key="text-nav"
        className="text-nav"
        >
        <MenuItemList
          itemClassName="text-nav-item"
          activeItem={activeItem}
          />
      </div>
      <div
        key="icon-nav"
        className={classnames(iconNavClasses)}
        onClick={() => {
          if (onToggleOverlay) {
            onToggleOverlay(!showingOverlayMenu);
          }
        }}
        >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  match: PropTypes.object.isRequired,
  onToggleOverlay: PropTypes.func,
  showingOverlayMenu: PropTypes.bool.isRequired,
};

export default Menu;
