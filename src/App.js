import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import BlogDetail from "./Components/BlogDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="brand">Website Farhan</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="profile" className="nav-item">
          Profile
        </Link>
        <Link to="blog" className="nav-item">
          Blog
        </Link>
        <Link to="Contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
