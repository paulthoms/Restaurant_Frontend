import React from 'react';
import { routers } from '../../routers';
import ButtonNavBar from './ButtonNavBar';

export default function NavBarVertical() {

    console.log(routers);

    return (
        <div className="navbar_vertical" >
            <div className="nav_logo-content" style={{ padding: "20px" }}>RES-OOAD</div>
            {
                routers.map((item, index) => {
                    if (item.isNav == "yes")
                        return (
                            <ButtonNavBar key={index} content={item} />
                        );
                })
            }

        </div>
    )

}