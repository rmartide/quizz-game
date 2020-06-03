import { Question } from "./../redux/redux.types";

let questions: Question[] = [];

const q1: Question = {
	title:
		"¿Cuál es el significado de la palabra más larga en Alemán: Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz",
	answers: {
		a: "No sé japonés",
		b:
			"Ley sobre la transferencia de las obligaciones de vigilancia del etiquetado de las mascarillas y de los procesos de fabricación",
		c:
			"Ley sobre la transferencia de las obligaciones de vigilancia del etiquetado de la carne de vacuno y la designación de los bovinos",
		d: "Te lo has inventao. Eso ni se parece al Alemán."
	},
	correct: "c",
	number: 0,
	answer: ""
};

const q2: Question = {
	title:
		"Cuanto yo tenia 6 años mi hermana tenía la mitad de mi edad, ahora yo tengo 70 años ¿cuántos años tiene mi hermana?",
	answers: {
		a: "Imposible saberlo, no la conozco.",
		b: "35",
		c: "64",
		d: "67"
	},
	correct: "d",
	number: 1,
	answer: ""
};

const q3: Question = {
	title:
		'Qué respondió el concursante de Quieres ser millonario a la pregunta... La canción dice: "No tengo trono ni reina, ni nadie que me comprenda, pero sigo siendo el ..."',
	answers: {
		a: "Papirruqui",
		b: "Papá de los helados",
		c: "Rey",
		d: "Alma de la fiesta"
	},
	correct: "b",
	number: 2,
	answer: ""
};

const q4: Question = {
	title: "¿Cuántos hijos tiene Julio Iglesias? (Conocidos)",
	answers: {
		a: "7",
		b: "9",
		c: "Ni él mismo lo sabe",
		d: "5"
	},
	correct: "b",
	number: 3,
	answer: ""
};

const q5: Question = {
	title: "¿Qué pesa más un kilo de hierro o un kilo de paja?",
	answers: {
		a: "Hierro",
		b: "Paja",
		c: "Pesan lo mismo",
		d: "Depende del lugar donde se pese"
	},
	correct: "d",
	number: 4,
	answer: ""
};

const q6: Question = {
	title: "¿Por qué los de Lepe no salen de la comunidad?",
	answers: {
		a: "Porque su comunidad se encuentra en fase 0",
		b: "Lepe es parte del estado de Texas, no de una comunidad",
		c: "Porque hay un cartel que pone Huelva",
		d: "Todos los caminos llevan a Lepe"
	},
	correct: "c",
	number: 5,
	answer: ""
};

const q7: Question = {
	title: "¿Cuál es el valor del límite de la sucesión (1 + 1/n)^n cuando n tiende a infinito?",
	answers: {
		a: "b",
		b: "c",
		c: "d",
		d: "e"
	},
	correct: "d",
	number: 6,
	answer: ""
};

const q8: Question = {
	title:
		"El cuco delega cuando se trata de cuidar y alimentar a los polluelos pondrá su huevo en un nido de no vigilado de una especie más pequeña. ¿Qué hace la cría del cuco?",
	answers: {
		a: "Reparte la comida sin ningún problema con sus hermanos de otra madre",
		b: "Se va con su madre, la cual estaba esperando a que eclosionara el huevo",
		c: "Expulsa a los demás huevos o polluelos y se queda con todo el espacio y alimento",
		d: "En realidad es un mito, las mamás cuco quieren mucho a sus cuquitos y jamás se los endosarían a nadie"
	},
	correct: "c",
	number: 7,
	answer: ""
};

questions = [q1, q2, q3, q4, q5, q6, q7, q8];

export default questions;
