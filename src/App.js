import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import {Login} from './components/Login';
import { Employees } from './components/Employees';
import { Upload } from './components/Upload';


function App() {
  return (
    <div className="App">
        <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/upload" element={<Upload/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
