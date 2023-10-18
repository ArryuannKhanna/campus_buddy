import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Landingpage from './LandingPage/Landingpage';
import Fetaurestile from './Featurestile/Fetaurestile';
import ReviewSection from './ReviewSection/ReviewSection';
function App() {
  return (
    <>
     <div className="landing-background">
     <Navbar/>
     <Landingpage/>
     <Fetaurestile/>
     <ReviewSection/>
     </div>
    </>
  )
}
export default App;

