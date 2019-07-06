import './OverlayMenu.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { NAVIGATION_ROUTES } from '../constants';

interface OverlayMenuPropTypes {
  match: any;
  onCloseOverlay?: () => void;
};

const getClasses = (item: string, activeItem: string) => {
  return classnames({
    'overlay-menu-item': true,
    'active': item === activeItem,
  });
};

const OverlayMenu: React.FC<OverlayMenuPropTypes> = (props: OverlayMenuPropTypes) => {
  const { onCloseOverlay, match } = props;
  const activeItem = match.params.activeItem || 'home';

  return (
    <nav className="overlay-menu">
      {
        NAVIGATION_ROUTES.map((route) => (
          <Link
            key={`route-${route}`}
            to={`/${route}`}
            className={getClasses(route, activeItem)}
            onClick={() => {
              if (onCloseOverlay) {
                onCloseOverlay();
              }
            }}
            >
            {route}
          </Link>))
      }
    </nav>
  );
};

OverlayMenu.propTypes = {
  match: PropTypes.object.isRequired,
  onCloseOverlay: PropTypes.func,
};

export default OverlayMenu;