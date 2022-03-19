import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Destinos from "./Pages/Destino";
import DestinosCreate from "./Pages/Destino/Create";
import Contato from "./Pages/Contato/Contato"
import Promocoes from "./Pages/Promo";
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Page />}>
            <Route path="/" element={<Home />} />
            <Route path="/Destinos" element={<Destinos />} />
            <Route path="/Destinos-Create" element={<DestinosCreate />} />
            <Route path="/Destinos-Update/:id" element={<DestinosCreate />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Promocoes" element={<Promocoes />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
