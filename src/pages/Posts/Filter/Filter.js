import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Category from './Category';
import Time from './Time';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "20px"
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Filter() {

    const classes = useStyles();

    return (
        <div className="filter__group" >
            <div className="filter__main" >
                <Grid container className={classes.root} spacing={1}>
                    <Grid container justify="center" item xs={4} sm={4}>
                        <Category />
                    </Grid>
                    <Grid container justify="center" item xs={4} sm={4}>
                        <Time />
                    </Grid>
                    <Grid container justify="center" alignItems="center" item xs={4} sm={4}>
                        <Search />
                    </Grid>
                </Grid>
            </div>
        </div>

    )

}