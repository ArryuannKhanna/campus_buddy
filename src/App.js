import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Landingpage from './LandingPage/Landingpage';
import Fetaurestile from './Featurestile/Fetaurestile';

function App() {
  return (
    <>
     <div className="landing-background">
     <Navbar/>
     <Landingpage/>
     <Fetaurestile/>
     </div>
    </>
  )
}
export default App;

