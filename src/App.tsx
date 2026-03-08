import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
