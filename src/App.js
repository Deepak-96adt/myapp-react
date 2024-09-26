import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import ShowCharts from './Components/Chart/ShowCharts';
import Todo from './Components/Todo/Todo';
import Weather from './Components/Weather/Weather';
import AddExpenses from './Components/AddExpenses/AddExpenses';
import Quiz from './Components/Quiz/Quiz';
import UsersInfo from './Components/UsersInfo/UsersInfo';
import QuizMCQ from './Components/Quiz/QuizMCQ';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/quizmcq' element={<QuizMCQ/>}></Route>
        <Route path='/addExpenses' element={<AddExpenses/>}></Route>
        <Route path='/chart' element={<ShowCharts/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/weather' element={<Weather/>}></Route>
        <Route path='/usertable' element={<UsersInfo/>}></Route>
      </Routes>
    </>
  );
}

export default App;
