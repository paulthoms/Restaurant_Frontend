import React from 'react';
import CardNews from '../card/CardNews';

export default function ListItem(props) {

    return (
        <>
            {
                props.data.map((item, index) => {
                    return (
                        <div style={{ padding: "10px 0px 10px 0px" }} key={index} onClick={() => props.handleLinkTo(index, props.country, item.title)} >
                            <CardNews data={item} />
                        </div>
                    );
                })
            }
        </>
    )

}