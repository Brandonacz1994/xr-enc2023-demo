import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import INTRO from "./Scenes/intro"
import TEMA_1 from "./Scenes/tema_1_figuras"
import TEMA_2 from "./Scenes/tema_2_posicion_rotacion_escala"
import TEMA_3 from "./Scenes/tema_3_transformaciones"
import TEMA_4 from "./Scenes/tema_4_assets_interacciones"
import TEMA_5 from "./Scenes/tema_5_webxr"


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<INTRO/>}></Route>
          <Route path='/tema_1' element={<TEMA_1/>}></Route>
          <Route path='/tema_2' element={<TEMA_2/>}></Route>
          <Route path='/tema_3' element={<TEMA_3/>}></Route>
          <Route path='/tema_4' element={<TEMA_4/>}></Route>
          <Route path='/tema_5' element={<TEMA_5/>}></Route>
      </Routes>
    </Router>
)}

export default App;
