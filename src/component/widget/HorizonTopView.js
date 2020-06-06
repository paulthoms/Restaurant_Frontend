import React from 'react';

const style = {
    display: "flex",
    flexDirection: "row",
}

export default function HorizonTopView(props) {

    return (
        <div className="widget_horizonView" >
            <div className="widget__name" style={{ marginBottom: "20px" }} >{props.name}</div>
            <div className="widget__content" style={style} >{props.content}</div>
        </div>
    )

}