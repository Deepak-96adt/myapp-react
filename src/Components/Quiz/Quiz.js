import React, { useState } from 'react';
import Alert from '../Other Utility Components/Alert';
import { quiz } from '../Other Utility Components/QuizData';

function Quiz() {
    
    const [myAlert, setMyAlert] = useState(null);
    const [i, setI] = useState(0);
    const [userInput, setUserInput] = useState();
    const [userMarks , setUserMarks] = useState(0);

    const showAlert = (type, message) => {
        setMyAlert({
            type: type,
            message: message,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput) {
            if (quiz[i].correctAnswer.toLowerCase() === userInput.trim().toLowerCase()) {
                setUserMarks(userMarks+10);
                showAlert("success", "Correct Answer");
                setTimeout(() => {
                    setMyAlert(null);
                }, 2000)
            }
            else {
                showAlert("danger", "InCorrect Answer");
                setTimeout(() => {
                    setMyAlert(null);
                }, 2000)
            }
        }
        else {
            showAlert("danger", "Please enter Answer");
            setTimeout(() => {
                setMyAlert(null);
            }, 2000)
        }

        
    }

    const handleNext = (e) => {
        e.preventDefault();
        if (userInput) {
            setI(i + 1);
            setUserInput("");
        }
        else {
            showAlert("danger", "Please enter Answer");
            setTimeout(() => {
                setMyAlert(null);
            }, 2000)
        }

    }
    const handlePrevious =(e)=>{
        e.preventDefault();
        if(i>0)
            setI(i-1);
    }

    return (
        <>
            <Alert alert={myAlert} />
           {(i===10) ?(<div className='container m-4'><h2 className='text-success'>You have done all 10 Questions</h2><br /><h4>Your marks : {userMarks}/100</h4><br/><a className='btn btn-primary' href='/quiz'>Click to Do again</a></div>) : (
               <div className='container m-4'>
                <h1 className='text-primary'>Word Quiz</h1>
                <br/>
                <h3>Question {i + 1} : {quiz[i]?.question}</h3>
                <br />
                <form>
                    <p>Your Answer : <input type="text" placeholder='Enter your answer here' value={userInput} onChange={(e) => { setUserInput(e.target.value) }} /></p>
                    <br />
                    <button className='btn btn-primary' onClick={handlePrevious}>Previous  Qus</button>
                    <button className='btn btn-primary mx-4' onClick={handleSubmit}>Submit</button>
                    <button className='btn btn-primary' onClick={handleNext}>Next Qus</button>
                </form>
            </div>)}
        </>
    )
}

export default Quiz