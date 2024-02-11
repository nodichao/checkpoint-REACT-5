import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { Description } from "./components/Description.js";
import {Routes,Route,Link} from 'react-router-dom';


function App() {
  return (
    <>
      <Link to="/back" style={{fontSize:'35px'}}>Retour</Link>
      <Routes>
          <Route path="/" element={<MovieList />}/>
          <Route path="/description/:title" element={<Description/>}/>
          <Route path="/back" element={<MovieList />}/>
      </Routes>
    </>
  );
}

export default App;
