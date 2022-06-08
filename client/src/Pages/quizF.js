import React, { useState } from "react";
import "../quizimg/quiz.css";

function QuizF() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "ከሚከተሉት ውስጥ የትኛው ነው በግእዝ ፈደላት ውስጥ የማይካተተው?",
      options: [
        { id: 0, text: "ሸ", isCorrect: false },
        { id: 1, text: " ከ ", isCorrect: false },
        { id: 2, text: "ወ", isCorrect: false },
        { id: 3, text: "ፐ", isCorrect: true },
      ],
    },
    {
      text: "በግእዝ ፈደላት ውስጥ የማይካተተው?",
      options: [
        { id: 0, text: "ጨ", isCorrect: true },
        { id: 1, text: "ሀ", isCorrect: false },
        { id: 2, text: "ዘ", isCorrect: false },
        { id: 3, text: "ሰ", isCorrect: false },
      ],
    },
    {
      text: "ከሚከተሉት ውስጥ የትኛው ነው ሞክሼ ፈደላት ውስጥ የማይካተተው?",
      options: [
        { id: 0, text: "ለ", isCorrect: true },
        { id: 1, text: "ህ", isCorrect: false },
        { id: 2, text: "አ", isCorrect: false },
        { id: 3, text: "ጸ", isCorrect: false },
      ],
    },
    {
      text: "ከሚከተሉት ውስጥ የትኛው ነው በግእዝ ፈደላት ውስጥ ትርጉሙ የሚሆነው ለ ብሂል ገባሬ ሰማያት ወምድር።?",
      options: [
        { id: 0, text: "ወ", isCorrect: false },
        { id: 1, text: "ገ", isCorrect: true },
        { id: 2, text: "ከ", isCorrect: false },
        { id: 3, text: "ረ", isCorrect: false },
      ],
    },
    {
      text: "የፊደል ቅርጽ የተጀመረው በ ማን ነው?",
      options: [
        { id: 0, text: "ሄኖክ", isCorrect: false },
        { id: 1, text: "ሄኖስ", isCorrect: true },
        { id: 2, text: "አብርሃም", isCorrect: false},
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

export default QuizF;
