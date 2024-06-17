import React, { useState, useContext } from 'react';
import { SurveyContext } from './context';

const questions = [
  {
    question: 'What are your primary career interests?',
    options: ['A)Business and Management',
      'B)Engineering and Technology',
      'C)Healthcare and Medicine',
      'D)Arts and Humanities']
  },
  {
    question: 'What is your preferred wotk environment?',
    options: ['A)Fast-paced and dynamic',
      'B)Collaborative and team-oriented',
      'C)Analytical and data-driven',
      'D)Creative and innovative']
  },
  {
    question: 'How do you prefer to solve problems?',
    options: ['A)Logical analysis and reasoning',
      'B)Hands-on experimentation and trial-and-error',
      'C)Strategic planning and forecasting',
      'D)Intuitive insights and creativity']
  },
  {
    question: 'What skills would you like to develop further?',
    options: ['A)Leadership and management',
      'B)Technical and engineering expertise',
      'C)Communication and interpersonal skills',
      'D)Critical thinking and problem-solving abilities']
  },
  {
    question: 'What type of asks do you enjoy most?',
    options: ['A)Leading and delegating',
      'B)Building nd designing systems',
      'C)Helping and supporting thers',
      'D)Creating and expressing ideas']
  },
  {
    question: 'How do you prefer to learn new concepts?',
    options: ['A)Reading and studying independently',
      'B)Hands-on experimmentation and projects',
      'C)Group discussions and collaborative projects',
      'D)Visual demostrations and multimedia presentations']
  },
  {
    question: 'What are your long-term career goals?',
    options: ['A)Climbing the corporate ladder',
      'B)Starting my own business or venture',
      'C)Making a positive impact on society',
      'D)Pursuing artistic or  creative endeavors']
  },
  {
    question: 'What motives you in your career?',
    options: ['A)Financial success and stability',
      'B)Making a difference and helping others',
      'C)Solving complex problems and challenges',
      'D)Personal growth and development']
  },
  {
    question: 'How do you handle adversity or setbacks?',
    options: ['A)Persevere and push through difficulties',
      'B)Seek guidance and support from others',
      'C)Analyze the situation and develop a strategic plan',
      'D)Embrace change and adapt quickly']
  },
  {
    question: 'What work-life balance do you prefer?',
    options: ['A)Strive for a challenging and demanding career',
      'B)Prioritize personal and family time over work commitments',
      'C)Find balance between work and personal life',
      'D)Integrate work and personal passions seamlessly']
  },
  
];

const OrientationSurvey = () => {
  // TODO
  // add dict to store survey results
  // "question1": "B"
  // "question2": "A"
  // "question3": "B"
  // "question4": "C"
  // progress bar 1 to 10
  // question counter (eg counter=5 => shows question 5)
  // onClick (next question => counter +1)


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const { answers, progressValue, surveyComplete, surveyResults, handleOptionChange, endSurvey, questions } = useContext(SurveyContext);

  const nextQuestion = () => {
    if (answers[currentQuestion] === undefined) {
      setErrorMessage('Please select an answer before proceeding.');
    } else if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    }
  };

  const finishSurvey = () => {
    if (endSurvey()) {
      console.log('Survey completed', surveyResults);
    } else {
      setErrorMessage('Please answer all questions before ending the survey.');
    }
  };

  return (
    <center>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <progress
            value={progressValue}
            max="100"
            style={{ width: '34%', height: '30px' }}
          ></progress>
        </div>
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <button
                  style={{
                    marginBottom: '10px',
                    textAlign: 'left', 
                    fontWeight: 'bold',
                    width: '55%',
                    height: '43px',
                    borderRadius: '8px',
                    border: '1px solid ',
                    backgroundColor: answers[currentQuestion] === option.split('.')[0] ? 'grey' : 'white'
                  }}
                  onClick={() => handleOptionChange(currentQuestion, option.split('.')[0])}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        {currentQuestion < questions.length - 1 ? (
          <button onClick={nextQuestion}>Next question →</button>
        ) : (
          <button onClick={finishSurvey}>Finish survey →</button>
        )}
      </div>
      {surveyComplete && (
        <div>
          <h2>Survey Results:</h2>
          <pre>{JSON.stringify(surveyResults, null, 2)}</pre>
        </div>
      )}
    </center>
  );
}

export default OrientationSurvey;import React from 'react';

const OrientationSurvey = () => {
  // TODO
  // add dict to store survey results
  // "question1": "B"
  // "question2": "A"
  // "question3": "B"
  // "question4": "C"
  // progress bar 1 to 10
  // question counter (eg counter=5 => shows question 5)
  // onClick (next question => counter +1)

  return (
    <div>
      <h2>Orientation Survey</h2>
      <p>Question: Test?</p>
      <p>Question: Test?</p>
    </div>
  );
}

export default OrientationSurvey;