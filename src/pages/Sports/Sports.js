import React from 'react';
import { useHistory } from 'react-router-dom';
import CardHeaderHorizon from '../../component/card/CardHeaderHorizon';
import CardHeaderSmall from '../../component/card/CardHeaderSmall';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TabWidget from '../../component/Tab/TabWidget';
import CardNews from '../../component/card/CardNews';
import ListItem from '../../component/List/ListItem';
var changToEnglish = require('../../common/CommonFunction');

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "20px",
        marginTop: "20px"
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Sports() {

    const classes = useStyles();
    const history = useHistory();

    function handleLinkTo(id, sport, title) {
        history.push(`/sport-page/${sport}/${title != undefined ? changToEnglish(title).split(" ").join("-") : "undefined"}/${id + 1}`);
    }

    return (
        <div className="content">
            <div className="main" >
                <div className="banner column" >
                    <div className="banner_up banner_music" >
                        <CardHeaderHorizon />
                    </div>
                    <div className="banner_down_0" >
                        <Grid container className={classes.root} spacing={1}>
                            {
                                [1, 2, 3].map((item, index) => {
                                    return (

                                        <Grid container justify="center" item xs={4} sm={4}>
                                            <CardHeaderSmall />
                                        </Grid>

                                    );
                                })
                            }
                        </Grid>
                    </div>
                </div>
                <div className="section">
                    <TabWidget listTabs={
                        [
                            {
                                name: "All",
                                component:
                                    <ListItem
                                        data={[{ title: "có anh ở đây rồi" }, 2, 3, 4, 5, 6, 7]}
                                        handleLinkTo={handleLinkTo}
                                        country={"all"}
                                    />
                            },
                            {
                                name: "Football",
                                component:
                                    <ListItem
                                        data={[1, 2, 3, 4, 5, 6, 7]}
                                        handleLinkTo={handleLinkTo}
                                        country={"football"}
                                    />
                            },
                            {
                                name: "Basketball",
                                component:
                                    <ListItem
                                        data={[1, 2, 3, 4, 5, 6, 7]}
                                        handleLinkTo={handleLinkTo}
                                        country={"basketball"}
                                    />
                            }
                        ]
                    } />
                </div>
            </div>
        </div>
    )

}