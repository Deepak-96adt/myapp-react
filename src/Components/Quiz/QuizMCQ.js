import React, { useState } from 'react'
import { QUIZ } from '../Other Utility Components/QuizMcqData';
import Result from './Result';

function QuizMCQ() {
  const [score, setScore] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [correctlyAnswered, setCorrectlyAnswered] = useState(Array(QUIZ.length).fill(false));

  const handleAnswerChange = (QusIndex, selectedOpt) => {
    if (QUIZ[QusIndex]?.answer.toLowerCase() === selectedOpt.toLowerCase() && !correctlyAnswered[QusIndex]) {
      const newCorrectlyAnswered = [...correctlyAnswered];
      newCorrectlyAnswered[QusIndex] = true;
      setCorrectlyAnswered(newCorrectlyAnswered);
      setScore(score + 10);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  }

  if (redirect)
    return <Result score={score} />


  return (
    <>
      <div className='container m-4'>
        <h1 className='text-primary'>MCQ Quiz</h1>
        {/* <h3 className='d-flex justify-content-end text-primary'>Welcome user</h3> */}
        <div className='container p-2'>
          {QUIZ.map((row, index) => (
            <div className='container p-4'>
              <h4>Qus-{index + 1} : {QUIZ[index]?.question}</h4>
              <br />
              {row.options.map((options, optIndex) => (
                <div className='container px-4'>
                  <input type="radio" name={index}
                    onChange={() => { handleAnswerChange(index, options) }} id={options} /> {options}<br />
                </div>
              ))}
            </div>
          ))}
          <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default QuizMCQ;




