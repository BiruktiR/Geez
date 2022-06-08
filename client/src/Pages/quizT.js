import React, { useState } from "react";
import "../quizimg/logo.jpg";

function QuizT() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: " አንፍ ስንል ምን ማለት ነው?",
      options: [
        { id: 0, text: "ድካም", isCorrect: false },
        { id: 1, text: " አፍ", isCorrect: false },
        { id: 2, text: "አፍንጫ", isCorrect: true },
        { id: 3, text: "ከንፈር", isCorrect: false },
      ],
    },
    {
      text: "ብርክ ስንል ምን ማለት ነው?",
      options: [
        { id: 0, text: "ጉልበት", isCorrect: true },
        { id: 1, text: "የተባረከ", isCorrect: false },
        { id: 2, text: "ብሩክ", isCorrect: false },
        { id: 3, text: "አግር", isCorrect: false },
      ],
    },
    {
      text: "መንበር ስንል ምን ማለት ነው?",
      options: [
        { id: 0, text: "ዙፋን", isCorrect: false },
        { id: 1, text: "መቀመጫ", isCorrect: true },
        { id: 2, text: "ቦታ", isCorrect: false },
        { id: 3, text: "አዛዝ", isCorrect: false },
      ],
    },
    {
      text: "ገጽ ስንል ምን ማለት ነው።?",
      options: [
        { id: 0, text: "አካል", isCorrect: false },
        { id: 1, text: "መልክ", isCorrect: false },
        { id: 2, text: "ፊት", isCorrect: true},
        { id: 3, text: "አንገት", isCorrect: false },
      ],
    },
    {
      text: "እዝን ስንል ምን ማለት ነው ?",
      options: [
        { id: 0, text: "ጆሮ", isCorrect: true },
        { id: 1, text: "እግር", isCorrect: false },
        { id: 2, text: "ሆድ", isCorrect: false},
        { id: 3, text: "አላውቅም", isCorrect: false },
      ],
    },
    
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>የግእዝ ፈተና</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizT;
