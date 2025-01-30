const quizzes = [
    {
        quizz: "Paises",
        questions: [
            {
                question: "¿En qué país se baila la cueca?",
                answers: ["Chile", "Italia", "Brasil", "Australia"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿En qué país se encuentra la torre de Pisa?",
                answers: ["Italia", "Francia", "España", "Portugal"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿En qué país se encuentra la torre Eiffel?",
                answers: ["Nueva Zelanda", "Argentina", "Egipto", "Francia"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Qué país es conocido por sus estatuas de piedra?",
                answers: ["China", "España", "India", "Japon"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿En qué país se encuentra la ciudad de Nueva York?",
                answers: ["Estados Unidos", "Canadá", "China", "Australia"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿En qué país se baila la samba?",
                answers: ["Brasil", "Australia", "Alemania", "Japon"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿En qué país habitaron los vikingos?",
                answers: ["Noruega", "Italia", "Francia", "España"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿En qué país se encuentra el Coliseo?",
                answers: ["Italia", "Francia", "España", "Japon"],
                votes: [0, 0, 0, 0]
            }
        ]
    },
    {
        quizz: "Música",
        questions: [
            {
                question: "¿Quién era el vocalista del grupo Queen?",
                answers: ["Michael Jackson", "Richard John", "Freddy Mercury", "Bob Dylan"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Cuál es la canción más popular de Jay-Z?",
                answers: ["99 Problems", "Smells Like Teen Spirit", "Young Forever", "Halo"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Qué banda es conocida por su trabajo en el heavy metal?",
                answers: ["Black Sabbath", "Led Zeppelin", "Metallica", "Iron Maiden"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Cuál es el instrumento más vendido en la música clásica?",
                answers: ["Violin", "Piano", "Saxophone", "Flute"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Qué banda es conocida por su trabajo en el punk rock?",
                answers: ["Ramones", "The Beatles", "The Rolling Stones", "The Who"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Cuál es la canción más popular de The Beatles?",
                answers: ["Help!", "Yellow Submarine", "Sgt. Pepper's Lonely Hearts Club Band", "Revolver"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Quién canta la canción 'Thriller'?",
                answers: ["Michael Jackson", "Elvis Presley", "Bob Dylan", "Prince"],
                votes: [0, 0, 0, 0]
            },
            {
                question: "¿Cuál es la canción más popular de Queen?",
                answers: ["Bohemian Rhapsody", "A Night at the Opera", "Material Girl", "Don't Stop Me Now"],
                votes: [0, 0, 0, 0]
            }
        ]
    }
];

function startQuiz() {
    let listQuiz = quizList();
    while (true) {
        let options = prompt(`Seleccione una opción:
            1 - Participar en una encuesta.
            2 - Ver resultados de una encuesta.
            3 - Salir.
        `);

        switch (options) {
            case '1':
                indexQuiz = parseInt(prompt(`Seleccione la encuenta en que desea participar: \n${listQuiz}`)) - 1;
                if (quizzes[indexQuiz]) {
                    quizVote(quizzes[indexQuiz]);
                }
            case '2':
                indexQuiz = parseInt(prompt(`Seleccione la encuenta que desea revisar: \n${listQuiz}`)) - 1;
                if (quizzes[indexQuiz]) {
                    quizResults(quizzes[indexQuiz]);
                }
            case '3':
                console.log("Gracias por participar en las encuestas.");
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    }
}

function quizList() {
    let listQuiz = quizzes.map((quiz, index) => `${index + 1}. ${quiz.quizz}`).join('\n');
    return listQuiz;
}

function quizVote(quiz) {
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
    console.log("Respuestas registradas correctamente.");
}

function quizResults(quiz) {
    let results = `Los resultados de la encuesta ${quiz.quizz} son:\n`;
    /* for (let i = 0; i < quiz.questions.length; i++) {
        results += `Pregunta ${i + 1} - ${quiz.questions[i].question}\n`;
        for (let index = 0; index < 4; index++) {
            results += `${index + 1} - ${quiz.questions[i].answers[index]}, votos: ${quiz.questions[i].votes[index]}\n`;
        }
    } */
    console.log(results);
}

startQuiz();