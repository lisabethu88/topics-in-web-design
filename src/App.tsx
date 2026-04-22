import "./App.css";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import BusinessPage from "./pages/BusinessPage";
import Resources from "./pages/Resources";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import Contact from "./pages/Contact";
import Fategories from "./pages/Fategories";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with layout */}
        <Route element={<Layout />}>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community-guide" element={<CommunityGuidelines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Fategories" element={<Fategories />} />

          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route
            path="/categories/:category/:business"
            element={<BusinessPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
