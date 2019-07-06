import './OverlayMenu.css';
import React from 'react';
import PropTypes from 'prop-types';
import MenuItemList from '../MenuItemList';

interface OverlayMenuPropTypes {
  match: any;
  onCloseOverlay: () => void;
};

const OverlayMenu: React.FC<OverlayMenuPropTypes> = (props: OverlayMenuPropTypes) => {
  const { onCloseOverlay, match } = props;
  const activeItem = match.params.activeItem || 'home';

  return (
    <nav className="overlay-menu">
      <MenuItemList
        itemClassName="overlay-menu-item"
        activeItem={activeItem}
        onItemClick={onCloseOverlay}
        />
    </nav>
  );
};

OverlayMenu.propTypes = {
  match: PropTypes.object.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
};

export default OverlayMenu;