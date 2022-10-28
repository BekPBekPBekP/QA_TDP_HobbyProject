import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Son from './Son.jpg';
import Monty from './Monty.jpg';
import { BrowserRouter as Router, Link, Route, Routes, } from "react-router-dom";
import CreateCat from "./Components/CreateCat"
import DeleteCat from "./Components/DeleteCats"
import GetCat from "./Components/GetCats"
import UpdateCat from "./Components/UpdateCats"
import { useState } from 'react';

function App() {
  const [currentCat, setCurrentCat] = useState();

  console.log("CURRENT CAT:", currentCat);

  return (
    <div className="App">
      <Router>

        <h2> Best Cat Of The Year Award 2022 </h2>
        <h4> Nomination Form </h4>
        <br />
        <br />
        <img src={Son} height={200} width={300}/><img src={Monty} height={300} width={250}/>
        <br />
        <br />

        <Link className='create' to="/bcotya/createCat">
          Nominate your Cat
        </Link>
        <br />
        <br />
        <Link className='read' to="/bcotya/getAll">
          Edit your Details
        </Link>
        <br />
        <br />


        <Routes>
          <Route path="/bcotya/createCat" element={<CreateCat />} />
          <Route path="/bcotya/updateCat" element={<UpdateCat currentCat={currentCat} />} />
          <Route path="/bcotya/getAll" element={<GetCat setCurrentCat={setCurrentCat} />} />



        </Routes>

      </Router>
    </div>
  );
}

export default App;
