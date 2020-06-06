import React from 'react';

export default function TopView(props) {

    return (
        <div>
            <span className="widget__name" >{props.name}</span>
            <div className="widget__content" >{props.content}</div>
        </div>
    )

}