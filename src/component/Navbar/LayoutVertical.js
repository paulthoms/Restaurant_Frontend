import React from 'react';
import NavBarVertical from './NavBarVertical';

export default function LayoutVertical(props) {

    return (
        <div className="layoutVertical" >
            <div className="layout_navbar" >
                <NavBarVertical />
            </div>
            <div className="layout_main" >
                {props.content}
            </div>
        </div>
    )

}