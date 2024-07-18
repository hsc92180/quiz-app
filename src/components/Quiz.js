import React, { useEffect, useState } from "react";

import "./Quiz.css";

import questions from "../assets/questions.json";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledQues = questions.sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffledQues);
  };

  const handleAnswerClick = (option) => {
    setShowAnswer(true);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, currentQuestion]);
    }

    setTimeout(() => {
      setShowAnswer(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 2000);
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
    setWrongAnswers([]);
    shuffleQuestions();
  };

  if (currentQuestionIndex >= shuffledQuestions.length) {
    return (
      <div className="quiz-container">
        <h1>Quiz Completed</h1>
        <p>Current Score: {score}</p>
        <div className="question-card">
          <h2>Wrong Answers</h2>
          <div className="wrong-answers">
          <ul>
            {wrongAnswers.map((question, index) => (
              <li key={index}>
                {question.question} - Correct Answer: {question.answer}
              </li>
            ))}
          </ul>
          </div>
        </div>
        <button onClick={resetQuiz}>Reset Quiz</button>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <p>Current Score: {score}</p>
      <div className="question-card">
        <p className="question-count">
          Question {currentQuestionIndex + 1} out of {shuffledQuestions.length}
        </p>
        <h2 className="question-text">{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              className="option-button"
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <p className="correct-answer">
            Correct Answer: {currentQuestion.answer}
          </p>
        )}
      </div>
    </div>
  );
}
