import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Music from './Music';
import Sports from './Sports';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function ComplexMusicSports() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <>
            <Music />
            <Sports />
        </>
    )

}