import { useState, useEffect, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { uid } from '../../lib/uid';

const id = '' + uid();

type MenuProps = {
    children?: React.ReactNode;
  };

const style:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: 'calc(100% - 2 * var(--button-diameter))',
    top: 'var(--button-diameter)',
    right: 0,
    zIndex: 5
};

export const RightMenu = ({ children }:MenuProps) => {
    return <div id={id} className="side-menu" style={style} >
        {children}
    </div>;
};

export const RightMenuPortal = ({ children }:{children?: React.ReactNode}) => {
    const [container, setContainer] = useState(() => document.getElementById(id));
    useEffect(() => {
        container || setContainer(document.getElementById(id));
    }, [container]);
    return container && ReactDOM.createPortal(children, container);
};