import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Category() {

    const classes = useStyles();
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={10}>Java</MenuItem>
                <MenuItem value={20}>Springboot</MenuItem>
                <MenuItem value={30}>JavaScript</MenuItem>
                <MenuItem value={30}>ReactJS</MenuItem>
                <MenuItem value={30}>NodeJS</MenuItem>
                <MenuItem value={30}>MySQL</MenuItem>
                <MenuItem value={30}>MongoDB</MenuItem>
            </Select>
        </FormControl>
    );
}

const technologies = [
    { title: 'Java' },
    { title: 'JavaScript' },
    { title: 'NodeJS' },
    { title: 'Android' },
    { title: 'Springboot' },
    { title: 'ReactJS' }
];