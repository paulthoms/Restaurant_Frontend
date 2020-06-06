import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import VerticalEntertainment from '../../../component/widget/VerticalEntertainment';
import EnterCardHead from '../../../component/card/EnterCardHead';
import ItemList from '../../../component/card/ItemList';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function Music() {

    const classes = useStyles();

    return (
        <>
            <VerticalEntertainment
                content={
                    <>
                        <EnterCardHead  name={"Music"} />
                        <div className="contentList" >
                            <List className={classes.root}>
                                {
                                    [1, 2].map((item, index) => {
                                        return (
                                            <ItemList key = {index} />
                                        );
                                    })
                                }
                            </List>
                        </div>
                    </>
                }
            />
        </>
    )

}