import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Category from './Category';
import Button from '@material-ui/core/Button';
import { postAPI, getAPI } from '../../common/APICaller';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: "100%",
    },
}));



export default function AddDish() {
    const classes = useStyles();
    const history = useHistory();

    const [infoDish, setInfoDish] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            image: '',
            cost: '',
            description: '',
            typeDish: {
                id: -1,
                name: ''
            }
        }
    );

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        // console.log(newValue);
        setInfoDish({ [name]: newValue });
    }

    const handleSelect = (event) => {
        // console.log(event.target.value);
        setInfoDish({
            ["typeDish"]: {
                id: event.target.value
            }
        });
    };

    function handleChangeFile(e) {
        console.log(e.target.files);
        setInfoDish({
            ["image"]: e.target.files[0]
        });
    }

    function checkInfo(obj) {
        for (var key in obj) {
            if (obj[key] == "") {
                return false;
            }
        }
        return true;
    }

    function handleSubmit() {
        console.log(infoDish);
        const formData = new FormData();
        formData.append('file', infoDish.image)
        // formData.append('type_id',infoDish.typeDish.id);
        formData.append('type_name', infoDish.typeDish.name);
        formData.append('name', infoDish.name);
        formData.append('cost', infoDish.cost);
        formData.append('description', infoDish.description);

        if (checkInfo(infoDish)) {
            postAPI("http://localhost:8080/pub/add-dish", formData, function (res) {
                if (res.data.code == 200) {
                    swal("Thêm món ăn mới thành công!")
                        .then((value) => {
                            history.push('/dish');
                        });
                }
                else{
                    swal("Thêm món ăn thất bại", "Có lỗi xảy ra về thông tin bạn nhập vào.");
                }
            })
        }
        else {
            swal("Có thông tin còn để trống", "kiểm tra lại thông tin");
        }
    }

    return (
        <div className="content">
            <div className="main" >
                <div className="content_title" >Thêm món ăn</div>
                <TextField
                    className={classes.root}
                    id="filled-secondary"
                    label="Tên món ăn"
                    variant="outlined"
                    color="primary"
                    value={infoDish.name}
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    className={classes.root}
                    id="filled-secondary"
                    // label="Image"
                    variant="outlined"
                    color="primary"
                    type="file"
                    // value={infoDish.image}
                    name="image"
                    onChange={handleChangeFile}
                />
                <TextField
                    className={classes.root}
                    id="filled-secondary"
                    label="Giá tiền"
                    variant="outlined"
                    color="primary"
                    value={infoDish.cost}
                    name="cost"
                    onChange={handleChange}
                />
                <Category handleSelect={handleSelect} setInfoDish={setInfoDish} />
                <TextField
                    className={classes.root}
                    id="outlined-multiline-static"
                    label="Mô tả ngắn về món ăn"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={infoDish.description}
                    name="description"
                    onChange={handleChange}
                />
                <div className={classes.root} style={{ display: "flex", flexDirection: "column" }} >
                    <Button variant="outlined" color="primary" onClick={handleSubmit} >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )

}