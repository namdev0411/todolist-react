import React, { useEffect, useState } from 'react';
import './View.scss';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PickDate from './PickDate';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const View = ({dataView,toggleView}) => {
    const [show, setshow] = useState(false);
    const [editMode, seteditMode] = useState(false);

    const changeEditMode = ()=>{
        seteditMode(currMode=>!currMode);
    }
    useEffect(() => {
        setshow(currShow=>!currShow);
    }, [toggleView])
    return (
        <div className={!show? "view active": "view"}>
            <div className="container">
                <IconButton 
                    color="primary" 
                    component="span"
                    className="closeButton"
                    onClick={()=>setshow(true)}
                    ><CloseIcon  />
                </IconButton>
                <div className="date">
                    {
                    editMode ? <PickDate/>: 
                    <>  
                        <span>日付:<p className="view-content">&nbsp; {dataView.date}</p></span>
                        <IconButton 
                            color="primary" 
                            component="span"
                            onClick={changeEditMode}
                            ><EditIcon  />
                        </IconButton>
                    </>
                    }
                </div>
                <div className="name">
                {
                    editMode ? 
                    <TextField
                        label="名前"
                        variant="outlined"
                    />
                    : 
                <span>名前:<p className="view-content">&nbsp; {dataView.name}</p></span>    
                }
                </div>
                <div className="content">
                {
                    editMode ? 
                    <TextField
                        label="内容"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                    />
                    : 
                <span>内容:<p className="view-content">&nbsp; {dataView.content}</p></span>   
                }
                </div>
                {
                    editMode ? 
                    <div className="button">
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick = {changeEditMode}
                            >OK
                        </Button>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    );
};

View.propTypes = {
};

View.defaultProps = {
    id: 0,
    date: " ",
    name: " ",
    content: " "
}
export default View;