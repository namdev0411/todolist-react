import React, { useState } from 'react';
import PickDate from './PickDate';
import TextField from '@material-ui/core/TextField';
import './Form.scss';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const Form = ({toggleForm,onToggleForm}) => {
    const [date, setDate] = useState(Date.now());
    const [name, setname] = useState("");
    const [content, setcontent] = useState("")

    const getDate = date=>{
        setDate(new Date(date));
    }
    const saveTodoToDB=()=>{
        //data {id,date,name,content}
        const data = {date,name,content};
        onToggleForm();
    }
    return (
        <div className={toggleForm?"form active": "form"}>
            <IconButton 
                color="primary" 
                component="span"
                className="closeButton"
                onClick={onToggleForm}
                ><CloseIcon  />
            </IconButton>
            <div className="container">
                <div className="form-field">
                    <PickDate getDate={getDate}/>
                </div>
                <div className="form-field">
                    <TextField
                        label="名前"
                        variant="outlined"
                        value={name}
                        onChange={e=>setname(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <TextField
                        label="内容"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                        value={content}
                        onChange={e=>setcontent(e.target.value)}
                    />
                </div>
                <div className="form-field form-button">
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick = {saveTodoToDB}
                        >OK
                    </Button>
                </div>
            </div>
        </div>
    );
};

Form.propTypes = {
    
};

export default Form;