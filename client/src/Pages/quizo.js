import React, { useState } from "react";
import "../quizimg/quiz.css";

function QuizF() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "መጠይቃን ቃላት ምን ማለት ነው?",
      options: [
        { id: 0, text: "ጥያቄ", isCorrect: true },
        { id: 1, text: " መልስ ", isCorrect: false },
        { id: 2, text: "አላውቅም", isCorrect: false },
        { id: 3, text: "ሌላ ነው", isCorrect:  false},
      ],
    },
    {
      text: "በግእዝ አይቴ ስንል ምን ማለት ነው ?",
      options: [
        { id: 0, text: "የት", isCorrect: true },
        { id: 1, text: "መቼ", isCorrect: false },
        { id: 2, text: "ና", isCorrect: false },
        { id: 3, text: "አየ", isCorrect: false },
      ],
    },
    {
      text: "እፎ  ስንል ምን መለት ነው ?",
      options: [
        { id: 0, text: "እንዴት", isCorrect: true },
        { id: 1, text: "እሺ", isCorrect: false },
        { id: 2, text: "አቤት", isCorrect: false },
        { id: 3, text: "የት", isCorrect: false },
      ],
    },
    {
      text: "አይ ስንል ምን መለት ነው።?",
      options: [
        { id: 0, text: "ማ", isCorrect: false },
        { id: 1, text: "ምን", isCorrect: true },
        { id: 2, text: "እኔ", isCorrect: false },
        { id: 3, text: "እሺ", isCorrect: false },
      ],
    },
    {
      text: "እስፍንት ስንል ምን መለት ነው ?",
      options: [
        { id: 0, text: "እሱ", isCorrect: false },
        { id: 1, text: "ስንት", isCorrect: true },
        { id: 2, text: "እሳ", isCorrect: false},
        { id: 3, text: "እኔ", isCorrect: false },
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

export default QuizF;
