import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, } from "react-router-dom";
import CreateCat from "./Components/CreateCat"
import DeleteCat from "./Components/DeleteCats"
import GetCat from "./Components/GetCats"
import UpdateCat from "./Components/UpdateCats"

function App() {
  return (
    <div className="App">
      <Router>

  


        <Routes>
          <Route path="/bcotya/createCat" element={<CreateCat />} />



        </Routes>












      </Router>
    </div>
  );
}

export default App;
