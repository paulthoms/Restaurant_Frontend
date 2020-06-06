import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { routers } from '../../routers';
import ButtonNavBar from './ButtonNavBar';

export default function Navbar(props) {

    const [display, setDisplay] = useState(window.innerWidth <= 720);
    const [showNav, setShowNav] = useState(false);
    const history = useHistory();

    useEffect(() => {
        function handleResize(width) {
            setDisplay(width > 720 ? false : true);
        }
        window.addEventListener('resize', function () {
            handleResize(window.innerWidth);
        });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleControlNavbar() {
        setShowNav(!showNav);
    }

    return (
        <div className="nav" >
            <div className="nav_logo" >
                {
                    display && <span className="nav_control" ></span>
                }
                <span className="nav_logo-content" >Milu-F</span>
                {
                    display && <span className="nav_control" onClick={handleControlNavbar} >
                        <i className="fas fa-bars" />
                    </span>
                }
            </div>
            <div className={`nav_group-buttons ${showNav ? "nav_group-block" : ""}`} >
                {
                    routers.filter(item => {
                        return item.isNav == "yes"
                    }).map((item, index) => {
                        return <ButtonNavBar key={index} content={item} />
                    })
                }
            </div>
        </div>
    )

}