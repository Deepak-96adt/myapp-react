import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AddExpenses() {
    const [userDetails , setUserDetails]= useState({name:"",category:"",amount:""});
    const [expenses, setExpenses] = useState([]);
    
    const handleSubmit = (e) =>{
          e.preventDefault();
          const newExpense = {
            name: userDetails.name,
            category: userDetails.category,
            amount: parseFloat(userDetails.amount)
           };
          const updatedExpenses = [...expenses, newExpense];

        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

        setUserDetails({name:"",category:"",amount:""});
    }


  return (
    <>
    <form className='container m-4'>
    <h1 className='text-primary'>Add Expenses here</h1>
    <br/>
  <div className="form-group my-3">
    <label htmlFor="exampleInputName1">Name</label>
    <input required value={userDetails.name} onChange={(e)=>{setUserDetails({...userDetails,name:e.target.value})}} type="text" className="form-control" id="exampleInputName1"  placeholder="Enter Name" />
  </div>
  
  <div className="form-group my-3">
    <label htmlFor="exampleInputCategory1">Category</label>
    <input required value={userDetails.category} onChange={(e)=>{setUserDetails( {...userDetails,category:e.target.value}   )   }} type="text" className="form-control" id="exampleInputCategory1" placeholder="Enter Category" />
  </div>
  <div className="form-group my-3">
    <label htmlFor="exampleInputAmount1">Amount</label>
    <input required value={userDetails.amount} onChange={(e)=>{setUserDetails({...userDetails,amount:e.target.value})}} type="number" className="form-control" id="exampleInputAmount1" placeholder="Enter Amount" />
  </div>
  <button className="btn btn-primary mx-3" onClick={handleSubmit}>Submit</button>
  <Link className="btn btn-primary mx-3" to="/chart">See Chart</Link>
</form>
    </>
  )
}

export default AddExpenses;