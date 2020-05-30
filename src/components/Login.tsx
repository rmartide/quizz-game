import React, { useRef } from 'react'
import Sockets from '../sockets';
import { useSelector } from 'react-redux';
import { State } from '../redux/redux.types';
import { Button, TextField } from '@material-ui/core';

export default function Login() {
    const error: boolean = useSelector<State, boolean>(state => state.currentUser === null);

    const error_text = error ? 'El nombre de usuario ya existe' : '';

    const ref = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (ref?.current && ref.current.value)
            Sockets.login(ref.current.value);
    }

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div style={style}>
            <TextField
                inputRef={ref}
                error={error}
                id="outlined-error-helper-text"
                label="Nombre de usuario"
                helperText={error_text}
                variant="outlined"
            />
            <div>
                <Button onClick={handleClick} variant="contained" color="secondary">Login</Button>
            </div>
        </div>
    )
}
