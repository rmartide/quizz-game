import React from 'react'
import { useSelector } from 'react-redux'
import { Question, State } from '../redux/redux.types'
import sockets from '../sockets';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

export default function PlayField() {

    const currentQuestion = useSelector<State, Question>(state => state.currentQuestion);

    if (!currentQuestion)
        return (
            <h2>Get Ready!</h2>
        );
    const { answers, title, number, correct } = currentQuestion;
    const handleClick = (option: string) => {
        sockets.answerQuestion(option === correct, number);
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    return (
        <div>
            {title}
            {
                Object.keys(answers)
                    .map((option: string) =>
                        <Card key={option} onClick={() => handleClick(option)}>
                            <CardContent>
                                <Typography variant="body1">
                                    {option}) {answers[option]}
                                </Typography>
                            </CardContent>
                        </Card>)
            }
        </div>
    )
}
