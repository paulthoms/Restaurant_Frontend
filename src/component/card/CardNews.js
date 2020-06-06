import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: "none",
  },
  flex: {
    display: "flex",
    width: "100%"
  },
  img: {
    width: "139px",
    height: "104px"
  },
  content: {
    textAlign: "start",
    paddingLeft: "10px"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.flex} >
        <img
          className={classes.img}
          src={props.data.image}
        />
        <div className={classes.content} >
          <div className="cardNews_title" >{props.data.name}</div>
          <div className="cardNews_cost" >Giá tiền: {props.data.cost}</div>
          <div className="cardNews_type" >Loại món ăn: {props.data.typeDish.name}</div>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
          </Typography>
        </div>
      </div>
    </Card>
  );
}