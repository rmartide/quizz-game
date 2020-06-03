import React from 'react'
import { useSelector } from 'react-redux'
import { Question, State, Answer } from '../redux/redux.types'
import sockets from '../sockets';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import gokuThumbsUp from '../assets/goku_thumb_up.jpg';
import gokuPunched from '../assets/goku_punched.jpg';

const useStyles = makeStyles({
    'question-card': {
        marginBottom: '20px',
        '&:hover': {
            backgroundColor: 'grey',
            color: 'white',
            cursor: 'pointer'
        }
    },
    'page-title': {
        textAlign: 'center'
    },
    'correct': {
        backgroundColor: 'green',
        color: 'white'
    },
    'incorrect': {
        backgroundColor: 'red',
        color: 'white'
    },
    'image-full': {
        width: '100%'
    }
});

export default function PlayField() {

    const currentQuestion = useSelector<State, Question>(state => state.currentQuestion);
    const questionAnswers = useSelector<State, Answer | undefined>(state => state.questionAnswers);

    const classes = useStyles();

    if (!currentQuestion)
        return (
            <Typography className={classes["page-title"]} variant="h2">
                Get Ready!
            </Typography>
        );
    const { answers, title, number, correct, answer } = currentQuestion;
    const handleClick = (option: string) => {
        if (currentQuestion.answer === '' && !questionAnswers)
            sockets.answerQuestion(option === correct, number, option);
    }

    const result = answer === correct;
    console.log(questionAnswers);
    return (
        <div>
            <Typography className={classes["page-title"]} variant="h5">
                {title}
            </Typography>
            {
                Object.keys(answers)
                    .map((option: string) => {
                        const wrongClass = (answer === option && answer !== correct) ? classes.incorrect : '';
                        const correctClass = (answer !== '' && option === correct) ? classes.correct : '';
                        return (
                            <Card className={`${classes["question-card"]} ${correctClass} ${wrongClass}`} key={option} onClick={() => handleClick(option)}>
                                <CardContent>
                                    <Typography variant="body1">
                                        {option}) {answers[option]}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })
            }
            {!!questionAnswers &&
                <div>
                    <h2>Respuestas</h2>
                    <p>a: {questionAnswers?.a}</p>
                    <p>b: {questionAnswers?.b}</p>
                    <p>c: {questionAnswers?.c}</p>
                    <p>d: {questionAnswers?.d}</p>
                </div>
            }

            {(result && answer !== '' && !questionAnswers) &&
                <img className={classes["image-full"]} src={gokuThumbsUp} alt="Goku te felicita" />
            }
            {(!result && answer !== '' && !questionAnswers) &&
                <img className={classes["image-full"]} src={gokuPunched} alt="Oh no, goku!" />
            }

        </div >
    )
}
