import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Learning from "./components/Learning";
import Jobs from "./components/Jobs";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
