import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, } from "react-router-dom";
import './App.css';
import CreateCat from "./Components"
import DeleteCat from "./Components"
import GetCat from "./Components"
import UpdateCat from "./Components"

function App() {
  return (
    <div className="App">
      <router>


        <Routes>
          <Route path="/bcotya/createCat" element={<createCat />} />



        </Routes>












      </router>
    </div>
  );
}

export default App;
