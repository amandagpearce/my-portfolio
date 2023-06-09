import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

interface SideDrawerProps {
  show: boolean;
  onClick: () => void;
  children: ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        onClick={props.onClick}
        className={`
                side-drawer
                fixed
                l-0
                t-0
                h-full
                w-4/6
                bg-white
                z-50
                shadow-lg
            `}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );

  // passing the element where the portal content will go by the time the component gets mounted
  return ReactDOM.createPortal(
    content,
    document.getElementById('drawer-portal') as Element
  );
};

export default SideDrawer;
