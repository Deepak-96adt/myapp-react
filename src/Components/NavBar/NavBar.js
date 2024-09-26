import React from 'react'
import { Link } from 'react-router-dom'
import CurrentTime from '../Other Utility Components/CurrentTime'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/usertable">User-Table</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/quiz">Quiz</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/quizmcq">Quiz-MCQ</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addExpenses">Expenses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/todo">MyTodo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/weather">Weather</Link>
        </li>
      </ul>
      <form className="d-flex">
        <CurrentTime myClass={"form-control me-2"}/>
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar