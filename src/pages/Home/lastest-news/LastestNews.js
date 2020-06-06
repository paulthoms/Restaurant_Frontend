import React from 'react';
import CardNews from '../../../component/card/CardNews';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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


export default function LastestNews() {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                {[0, 1, 2, 3].map((value, index) => (
                    <Grid key = {index} container justify="center" item xs={12} sm={6}>
                        <CardNews />
                    </Grid>
                ))}
            </Grid>
        </>
    )

}