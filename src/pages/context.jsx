// SurveyContext.js
import React, { createContext, useState } from 'react';

export const SurveyContext = createContext();

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

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [progressValue, setProgressValue] = useState(0);
  const [surveyComplete, setSurveyComplete] = useState(false);
  const [surveyResults, setSurveyResults] = useState({});

  const handleOptionChange = (questionIndex, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: answer
    }));
    setProgressValue(((questionIndex + 1) / questions.length) * 100);
  };

  const endSurvey = () => {
    if (Object.keys(answers).length !== questions.length) {
      return false;
    }
    const results = {};
    questions.forEach((question, index) => {
      results[`question${index + 1}`] = answers[index];
    });
    setSurveyResults(results);
    setSurveyComplete(true);
    return true;
  };

  return (
    <SurveyContext.Provider value={{ answers, progressValue, surveyComplete, surveyResults, handleOptionChange, endSurvey, questions }}>
      {children}
    </SurveyContext.Provider>
  );
};
