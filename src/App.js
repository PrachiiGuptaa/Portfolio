import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import About from './Pages/AboutMe/About';
import SeeMoreProjects from './Pages/Project/SeeMoreProjects/SeeMoreProjects';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/moreprojects' element={<SeeMoreProjects/>}/>
      </Routes>
    </div>
  );
}

export default App;