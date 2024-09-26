import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { finalChart } from '../Chart/MyChart';
import { expensesByName } from '../Chart/GroupedByName';

function Home() {

  const [showChart , setShowChart] = useState(false);
  const [apiData , setApiData] = useState();
  
  useEffect(() => {
    async function getData() {
      const url = "https://66f27d3871c84d8058757581.mockapi.io/expenses/expense";
      try {
        const response = await fetch(url);
        const json = await response.json();
        const groupedExpenses = expensesByName(json);
        setApiData(groupedExpenses)
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  },[]);


  return (
    <>
    <div className='container my-3 p-5 border border-primary'>
      <h1 className='text-primary'>Welcome to the MyTodo</h1>
      <br/>
      <Link className='btn btn-primary mb-3' to="/todo">Add-Todo</Link><br/>
    </div>
    <div className='container my-3 p-5 border border-primary'>
      <h1 className='text-primary'>Welcome to the MCQ Quiz Game</h1>
      <br/>
      <Link className='btn btn-primary mb-3' to="/quizmcq">Start Quiz</Link><br/>
    </div>
    <div className='container my-3 p-5 border border-primary'>
      <h1 className='text-primary'>Welcome to the 1 Word Quiz Game</h1>
      <br/>
      <Link className='btn btn-primary mb-3' to="/quiz">Start Quiz</Link><br/>
    </div>
    <div className='container my-3 p-5 border border-primary'>
      <h1 className='text-primary'>Welcome to the Weather App</h1>
      <br/>
      <Link className='btn btn-primary mb-3' to="/weather">See-Weather</Link><br/>
    </div>
    <div className='container my-3 p-5 border border-primary'>
      <h1 className='text-primary'>Welcome to the Expenses Tracker</h1>
      <br/>
      <Link className='btn btn-primary mb-3' to="/addExpenses">Add-Expenses</Link><br/>
      {showChart ? <div></div> : <button onClick={()=>{setShowChart(true)}} className='btn btn-primary'>Show chart From API</button>}
      {showChart && finalChart(apiData)}
    </div>
   
    </>
  )
}

export default Home