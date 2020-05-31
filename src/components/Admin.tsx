import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import questions from '../utils/questions';
import Sockets from '../sockets';



export default function Admin() {

    const [current, setCurrent] = useState(0)

    const handleClick = (index: number) => {
        setCurrent(index);
        Sockets.loadQuestion(index);
    }

    return (
        <div>
            Questions: 
            <div>
                {questions.map((question, index) => <Button onClick={() => handleClick(index)} key={index} color={current === index ? 'primary' : 'secondary'}>Question {index}</Button>)}
            </div>
            <div>
                METER AQUÍ BOTONES PARA MOSTRAR IMÁGENES DURANTE EL CUESTIONARIOOOO
            </div>
        </div>
    )
}
