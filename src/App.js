
import Home from "./Component/Main/Landing/Home";
import Header from './Component/Header/Header';
import Details from './Component/Main/Details/Details.jsx'; 
import Login from './Component/Auth/SignIn.jsx';
import Signup from './Component/Auth/Signup.jsx';
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div className="container mx-auto">
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/details" element={<Details/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </div>
    

    </>
  );
}

export default App;
