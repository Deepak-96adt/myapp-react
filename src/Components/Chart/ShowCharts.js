import React, { useState, useEffect } from 'react';
import { finalChart } from './MyChart';
import { expensesByName } from './GroupedByName';

function ShowCharts() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(storedExpenses);
  }, []);
  
  const groupedExpenses = expensesByName(expenses);
  
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((row, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  return (
    <>
    <div className="container p-3">

      <div className='row p-2'>
        <div className='w-50 align-self-start'>
          <h1 className='text-success'>Expense Tracker</h1>
        </div>
        <div className='w-50'>
          <div className='d-flex justify-content-end'>
            <ul style={{ listStyleType: "square", }}>
            <li className='text-danger'>More than $ 100</li>
            <li className='text-primary'>Between $ 25-100</li>
            <li className='text-success'>Less than $ 25</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container'>
        <ul className='p-3 d-flex flex-wrap'>
          {expenses.map((row, i) => (
            <li className='p-3 flex-content border border-dark m-2' style={{ listStyle: "none" }} key={i}>
              User Name: {row.name} <br /> Category: {row.category} <br /> Amount: ${row.amount} <br />
              <button className='btn btn-primary d-flex justify-content-center mx-5' onClick={() => {
                if (window.confirm(`Do you really want to delete the ${row.category} category?`)) {
                  handleDelete(i);
                }
              }}>Delete</button>
            </li>
          ))}
        </ul>
        {Object.keys(groupedExpenses).length > 0 && finalChart(groupedExpenses)}
      </div>
      
    </div>
    </>
  );
}

export default ShowCharts;