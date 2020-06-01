import { Question } from './../redux/redux.types';

let questions: Question[] = [];

const q1: Question = {
    title: 'Fecha de la incorporación de Rodrigo al equipo',
    answers: {
        a: '20 de enero de 2020',
        b: '15 de febrero de 2020',
        c: '30 de marzo de 2020',
        d: '27 de abril de 2020'
    },
    correct: 'd',
    number: 0,
    answer: ''
}

const q2: Question = {
    title: 'Placeholder del título',
    answers: {
        a: 'Ph a',
        b: 'Ph b',
        c: 'Ph c',
        d: 'Ph d'
    },
    correct: 'a',
    number: 1,
    answer: ''
}

questions = [q1, q2];

export default questions;
