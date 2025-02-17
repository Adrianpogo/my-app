import React from "react";
import { useState, useEffect } from "react";
import { FormularioQuizz } from "./FormularioQuizz";
import { Pregunta } from "./Pregunta";

export const AppAea2 = () => {
    //Variables useState
    var [preguntas, setPreguntas] = useState([]);
    var [numPreguntas, setNumPreguntas] = useState(10);
    var [categoria, setCategoria] = useState("geography");
    var [formato, setFormato] = useState("multiple");
    var [respuestas, setRespuestas] = useState([]);
    var [validada, setValidada] = useState(false);

    var apiKey = "$2b$12$NrzOemTN.IfwuXxIFWNBfO9LQ5fe685LrgQM8eKHDFOUzkuHtaK5W";

    //Funcionalidad para hacer el fetch añadiendo las respuestas correctas e incorrectas a cada pregunta
    var fetchPreguntas = () => {
        fetch(`https://api.quiz-contest.xyz/questions?limit=${numPreguntas}&category=${categoria}&format=${formato}`, {
            method: 'GET',
            headers: {
                Authorization: apiKey,
            }
        })
            .then(response => response.json())
            .then(data => {
                var preguntasFormateadas = data.questions.map(q => ({
                    ...q,
                    answers: [...q.incorrectAnswers, q.correctAnswers]
                }));
                setPreguntas(preguntasFormateadas);
                setValidada(false);
                setRespuestas([]);
            })
            .catch(error => {
                console.error('Error fetching questions:', error)
            });
    };

    //Cada vez que se cambie un campo se reenderiza de nuevo
    useEffect(() => {
        fetchPreguntas()
    }, [numPreguntas, categoria, formato])

    //Funcionalidad para almacenar las respuestas del usuario
    var handleAnswer = (indicePregunta, respuesta) => {
        setRespuestas({ ...respuestas, [indicePregunta]: respuesta })
    };

    //Funcionalidad para controlar que el usuario quiere validar
    var validateAnswers = () => {
        setValidada(true);
    };

    return (
        <div className="container text-center mt-3">
            <h1 className="mb-4">Quiz App</h1>
            <FormularioQuizz
                numPreguntas={numPreguntas}
                setNumPreguntas={setNumPreguntas}
                categoria={categoria}
                setCategoria={setCategoria}
                formato={formato}
                setFormato={setFormato}
                fetchPreguntas={fetchPreguntas}
            />
            <Pregunta questions={preguntas} userAnswers={respuestas} handleAnswer={handleAnswer} validated={validada} />
            <button onClick={validateAnswers} className="btn btn-success">Validar Respuestas</button>
        </div>
    );
};