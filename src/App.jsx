import "./App.css";
import Navbar from "./components/Navbar";
import AddBlog from "./components/AddBlog";
import { Route, Routes, BrowserRouter,Link } from "react-router-dom";
import Blogs from "./components/Blogs";
import EditBlog from "./components/EditBlog";

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
      <Link to="/add">
      </Link>
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
