import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { changeActionBar } from '../../redux/actions/index';

export default function Navbar(props) {

    const history = useHistory();

    const dispatch = useDispatch();
    const { actionBar } = useSelector(state => {
        return {
            actionBar: state.actionBar
        };
    });


    const handleChangeNavbar = useCallback(value => { dispatch(changeActionBar(value)) }, [dispatch]);
    const handleChangeLink = (link) => {
        history.push(link);
        handleChangeNavbar(link);
    }

    return (
        <>
            <li className={`nav_button ${actionBar.includes(props.content.link) ? "nav_button_active" : ""}`} onClick={() => { handleChangeLink(props.content.link) }} >
                {props.content.name}
            </li>
        </>
    )

}