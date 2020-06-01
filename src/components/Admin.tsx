import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import questions from '../utils/questions';
import Sockets from '../sockets';


export default function Admin() {

    const [current, setCurrent] = useState(-1);

    const useStyles = makeStyles({
        'admin-button': {
            margin: '10px'
        }
    });

    const classes = useStyles();

    const handleClick = (index: number) => {
        setCurrent(index);
        Sockets.loadQuestion(index);
    }

    const changeBackgroundImage = (show: boolean) => {
        Sockets.getBackgroundImage(show);
    }

    return (
        <div>
            Questions:
            <div>
                {
                    questions.map((question, index) =>
                        <Button
                            className={classes["admin-button"]}
                            variant="outlined"
                            onClick={() => handleClick(index)}
                            key={index}
                            color={current !== index ? 'primary' : 'secondary'}
                        >
                            Question {index}
                        </Button>)
                }
            </div>
            <div>
                <Button variant="outlined" onClick={() => changeBackgroundImage(true)}>
                    Show background image
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage(false)}>
                    Hide background image
                </Button>
            </div>
        </div>
    )
}
