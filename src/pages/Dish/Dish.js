import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardNews from '../../component/card/CardNews';
import { useHistory } from 'react-router-dom';
import { getAPI } from '../../common/APICaller';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
}));

export default function Dish() {
    const classes = useStyles();
    const history = useHistory();
    const [allDish,setAllDish] = useState([]);

    useEffect(()=>{

        getAPI('http://localhost:8080/pub/get-all-dish',function(res){
            setAllDish(res.data);
        })

    },[]);

    function handleLinkTo(link) {
        history.push(link);
    }

    return (
        <div className="content">
            <div className="main" >
                <div className="section_button_new" >
                    <Button variant="outlined" color="primary" onClick={() => handleLinkTo("/add-dish")}>
                        Món ăn mới
                    </Button>
                </div>
                <div className="section_list_dish" >
                    {
                        allDish.map((item, index) => {
                            return (
                                <div style={{ padding: "10px 0px 10px 0px" }} key={index} >
                                    <CardNews data={item} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )

}