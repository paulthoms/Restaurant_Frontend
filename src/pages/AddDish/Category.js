import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { getAPI } from '../../common/APICaller';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "50%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Category(props) {

    const classes = useStyles();
    const [value, setValue] = useState(-1);
    const [type, setType] = useState("");
    const [listType, setListType] = useState([]);

    useEffect(() => {

        getAPI('http://localhost:8080/pub/get-all-typedish',function(res){
            console.log(res);
            setListType(res.data);
        })

    }, []);

    const handleChangeSelect = (event) => {
        setValue(event.target.value);
        setType("");
        props.setInfoDish({
            ["typeDish"]: {
                id: event.target.value,
                name: listType.filter(item => {
                    return item.id == event.target.value;
                })[0].name
            }
        })
    }

    const handleChange = (event) => {
        setValue(-1);
        setType(event.target.value);

        props.setInfoDish({
            ["typeDish"]: {
                id: -1,
                name: event.target.value
            }
        })

    }


    return (
        <div className="type_dish_group" style={{ display: "flex" }} >
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Loại món ăn</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChangeSelect}
                >
                    {
                        listType.map(item => {
                            return (
                                <MenuItem name={item.name} value={item.id}>{item.name}</MenuItem>
                            );
                        })
                    }
                </Select>
            </FormControl>
            <TextField
                className={classes.formControl}
                id="filled-secondary"
                label="Loại món ăn"
                variant="outlined"
                color="primary"
                value={type}
                onChange={handleChange}
            />
        </div>
    );
}

// const listType = [
//     {
//         id: 1,
//         name: "Món rang"
//     },
//     {
//         id: 2,
//         name: "Món luộc"
//     }
// ]