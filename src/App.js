
import './App.css';
import Student from './components/student/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Studentdetails from './components/student/Studentdetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/student" element={<Student method='post'/>}></Route>
        <Route path="studentdetails" element={<Studentdetails method='get'/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
