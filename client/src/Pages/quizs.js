import React, { useState } from "react";
import "../quizimg/quiz.css";

function QuizS() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "  ያዘ ፣ ቆጠረ ፣ ጀመረ ስንል ምን ማለትን ያመለክታል ?",
      options: [
        { id: 0, text: "የግእዝ ቁጥሮች", isCorrect: false },
        { id: 1, text: "አኀዘ", isCorrect: false },
        { id: 2, text: "ነጠላ ቁጥር", isCorrect: false },
        { id: 3, text: "ጽሑፍ ግእዝን", isCorrect: true },
      ],
    },
    {
      text: "ከሚከተሉት ውስጥ የትኛው የግእዝ የቁጥር አጻጻፍ ነው ልክ የሆነው ለ '70'?",
      options: [
        { id: 0, text: "፹", isCorrect: true },
        { id: 1, text: "፸", isCorrect: false },
        { id: 2, text: "፼", isCorrect: false },
        { id: 3, text: "፻", isCorrect: false },
      ],
    },
    {
      text: "ከሚከተሉት ውስጥ የትኛው የግእዝ የቁጥር አጻጻፍ ልክ የሆነው ለ '100'?",
      options: [
        { id: 0, text: "፹", isCorrect: true },
        { id: 1, text: "፩ ", isCorrect: false },
        { id: 2, text: "፼", isCorrect: false },
        { id: 3, text: " ፻", isCorrect: false },
      ],
    },
    {
      text: "ከሚከተሉት ውስጥ የትኛው ነው በግእዝ  'አልቦ' የሚባለው።?",
      options: [
        { id: 0, text: "10", isCorrect: false },
        { id: 1, text: "11", isCorrect: true },
        { id: 2, text: "0", isCorrect: false },
        { id: 3, text: "20", isCorrect: false },
      ],
    },
    {
      text: " ከሚከተሉት ውስጥ የትኛው ነው በግእዝ  ፫ (ሠለስቱ) የሚባለው?",
      options: [
        { id: 0, text: "13", isCorrect: false },
        { id: 1, text: "3", isCorrect: true },
        { id: 2, text: "30", isCorrect: false},
        { id: 3, text: "70", isCorrect: false },
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

export default QuizS;
