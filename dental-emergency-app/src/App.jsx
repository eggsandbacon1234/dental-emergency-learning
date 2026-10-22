import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Emergencies from "./pages/Emergencies";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/emergencies"
          element={<Emergencies />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;