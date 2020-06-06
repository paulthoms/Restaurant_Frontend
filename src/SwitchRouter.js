import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { routers } from './routers';

export default function src() {
    return (
        <Switch>
            {
                routers.map((item, index) => {
                    return (
                        <Route key={index} path={item.link} component={item.component} />
                    );
                })
            }
        </Switch>
    )

}