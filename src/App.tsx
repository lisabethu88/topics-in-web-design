import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Optional: catch-all 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />{" "}
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
