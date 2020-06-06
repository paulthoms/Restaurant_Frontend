import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        borderRadius: "none"
    },
    media: {
        width: "60%"
    },
    area: {
        display: "flex"
    }
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={`${classes.area} card__area`} >
                <CardMedia
                    className={`${classes.media} card__media`}
                    component="img"
                    alt="Contemplative Reptile"
                    height="500"
                    image="images/slide4.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}