import React from "react";
import { useState } from "react";

export const Pregunta = ({ questions, userAnswers, handleAnswer, validated }) => {
    console.log(questions)
    return (
        <div className="container mt-4">
          {questions.map((q, index) => (
            <div key={index} className="mb-3 card shadow-sm">
              <div className="card-body">
                <h4 className="card-title">{q.question}</h4>
                <select className="form-select w-50 m-auto mt-3 text-center" 
                  onChange={(e) => handleAnswer(index, e.target.value)} 
                  value={userAnswers[index] || " "}
                  disabled={validated}
                >
                  {q.answers && q.answers.map((answer, i) => (
                      <option key={i} value={answer}>{answer}</option>
                  ))}
                </select>
                {validated && (
                  <p className={`mt-3 ${userAnswers[index] === q.correctAnswers ? "text-success" : "text-danger"}`}>
                      {userAnswers[index] === q.correctAnswers ? "Correcto" : "Incorrecto"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
}