import { useState, useEffect, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { uid } from '../../lib/uid';

const id = '' + uid();

type MenuProps = {
    children?: React.ReactNode;
  };

const style:CSSProperties = {
    display: 'flex',
    position: 'absolute',
    width: 'calc(100% - 2 * var(--button-diameter))',
    left: 'var(--button-diameter)',
    bottom: 0,
    zIndex: 5
};

export const BottomMenu = ({ children }:MenuProps) => {
    return <div id={id} className="menu" style={style} >
        {children}
    </div>;
};

export const BottomMenuPortal = ({ children }:{children?: React.ReactNode}) => {
    const [container, setContainer] = useState(() => document.getElementById(id));
    useEffect(() => {
        container || setContainer(document.getElementById(id));
    }, [container]);
    return container && ReactDOM.createPortal(children, container);
};