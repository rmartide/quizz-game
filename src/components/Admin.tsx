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

    const changeBackgroundImage = (name: string) => {
        console.log(name)
        Sockets.getBackgroundImage(name);
    }

    const handleQuestionAnswers = (show: boolean) => {
        Sockets.loadQuestionAnswers(show);
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
            <hr />
            <div>
                <Button variant="outlined" onClick={() => handleQuestionAnswers(true)}>
                    Show question answers
                </Button>
            </div>
            <hr />
            <div>
                <Button variant="outlined" onClick={() => changeBackgroundImage('julio')}>
                    Show julio
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('catEyes')}>
                    Show cat eyes
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('dog')}>
                    Show pet the dog
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('dance')}>
                    Show dance gif
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('fail')}>
                    Show fail gif
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('blink')}>
                    Show blink gif
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('fuegos')}>
                    Show fuegos artificiales
                </Button>
                <Button variant="outlined" onClick={() => changeBackgroundImage('')}>
                    Hide background image
                </Button>
            </div>
            <hr />
            <div>
                <Button variant="outlined" onClick={Sockets.loadWinners}>
                    Show winners
                </Button>
            </div>
        </div>
    )
}
