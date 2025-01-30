const createQuiz = () => {
    const quizz = prompt("Ingrese el nombre de la encuesta:");
    const questions = [];
    for (let index = 0; index < 2; index++) {
        question = prompt(`Ingrese la pregunta ${index + 1} de la encuesta:\nRECUERDE: Cada pregunta debe tener 4 opciones de respuesta.`);
        let answers = [];
        for (let index = 0; index < 4; index++) {
            let option = prompt(`Ingrese la opción de respuesta ${index + 1}:`);
            answers.push(option);
        }
        questions.push({ question, answers, votes: answers.map(() => 0) });
    }
    return {quizz, questions };
};

const quizVote = (quiz) => {
    for (let i = 0; i < quiz.questions.length; i++) {
        let question = quiz.questions[i].question;
        let answer = '';
        for (let index = 0; index < 4; index++) {
            answer += `${index + 1} - ${quiz.questions[i].answers[index]}\n`;
        }
        let vote = -1;
        while (vote < 0 || vote >= quiz.questions[i].answers.length) {
            vote = parseInt(prompt(`${question}\nSeleccione su respuesta:\n${answer}`)) - 1;
        }
        quiz.questions[i].votes[vote]++;
    }
    alert("Respuestas registradas con éxito.");
};

const quizResults = (quiz) => {
    let results = `Los resultados de la encuesta ${quiz.quizz} son:\n`;
    for (let i = 0; i < quiz.questions.length; i++) {
        results += `Pregunta ${i + 1} - ${quiz.questions[i].question}\n`;
        for (let index = 0; index < 4; index++) {
            results += `${index + 1} - ${quiz.questions[i].answers[index]}, votos: ${quiz.questions[i].votes[index]}\n`;
        }
    }
    alert(results);
};

const menu = () => {
    let quizzes = [];
    let options = null;

    while (options >= 1 || options < 5) {
        options = prompt(`Seleccione una opción:
            1 - Crear una encuesta.
            2 - Participar en una encuesta.
            3 - Ver resultados de una encuesta. 
            4 - Salir.
        `);

        if (options == 1) {
            quizzes.push(createQuiz());
            alert("Se creó la encuesta exitosamente.");
        } else if (options == 2) {
            if (quizzes.length === 0) {
                alert("No se ha registrado ninguna encuesta por el momento.");
            } else {
                let listQuiz = quizzes.map((quiz, index) => `${index + 1}. ${quiz.quizz}`).join('\n');
                const indexQuiz = parseInt(prompt(`Seleccione la encuenta en que desea participar: \n${listQuiz}`)) - 1;
                if (quizzes[indexQuiz]) {
                    quizVote(quizzes[indexQuiz]);
                }
            }
        } else if (options == 3) {
            if (quizzes.length === 0) {
                alert("No se ha registrado ninguna encuesta por el momento.");
            } else {
                let listQuiz = quizzes.map((quiz, index) => `${index + 1}. ${quiz.quizz}`).join('\n');
                const indexQuiz = parseInt(prompt(`Seleccione la encuenta que desea revisar: \n${listQuiz}`)) - 1;
                if (quizzes[indexQuiz]) {
                    quizResults(quizzes[indexQuiz]);
                }
            }
        } else if (options != 1 && options != 2 && options != 3 && options != 4) {
            alert("Opción no válida. Ingrese su opción nuevamente.");
        }   else if (options == 4) {
            alert("Gracias por participar en las encuestas.");
            break;
        } 
    }
};

menu();
