import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import LogIn from "./login/login";
function App() {
  return (
    
    <Router>
    <Routes>
       <Route path="/" element={<HomePage></HomePage>}></Route>
       <Route path="/login" element={<LogIn/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
