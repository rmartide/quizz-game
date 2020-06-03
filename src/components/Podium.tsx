import React from 'react'
import { makeStyles } from '@material-ui/core';
import { User } from '../redux/redux.types';

const useStyles = makeStyles({
    'podium-container': {
        display: 'grid',
        gridTemplateColumns: '200px 200px 200px',
        gridTemplateRows: '150px 50px 150px',
        backgroundColor: 'white',
        gridTemplateAreas: `
        '. winner .' 
        'second podium-top .' 
        'podium-left podium-top podium-right-container'
        `,
    },
    winner: {
        gridArea: 'winner',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    second: {
        gridArea: 'second',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    third: {
        gridArea: 'third',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    'podium-top': {
        gridArea: 'podium-top',
        border: '1px solid gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '130px',
        backgroundColor: 'gainsboro'
    },
    'podium-left': {
        gridArea: 'podium-left',
        border: '1px solid gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '90px',
        backgroundColor: 'gainsboro'
    },
    'podium-right': {
        gridArea: 'podium-right',
        border: '1px solid gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '60px',
        backgroundColor: 'gainsboro'
    },
    'podium-right-container': {
        gridArea: 'podium-right-container',
        display: 'grid',
        gridTemplateRows: '30px 120px',
        gridTemplateAreas: `
        'third'
        'podium-right'
        `
    }

});

type PodiumProps = {
    users: User[]
}

export default function Podium({users}:PodiumProps) {
    const classes = useStyles();
    return (
        <div className={classes["podium-container"]}>
            <div className={classes.winner}><h2>{users[0]?.username}</h2></div>
            <div className={classes.second}><h2>{users[1]?.username}</h2></div>
            <div className={classes["podium-top"]}>1</div>
            <div className={classes["podium-left"]}>2</div>
            <div className={classes["podium-right-container"]}>
                <div className={classes.third}><h2>{users[2]?.username}</h2></div>
                <div className={classes["podium-right"]}>3</div>
            </div>
        </div>
    )
}
