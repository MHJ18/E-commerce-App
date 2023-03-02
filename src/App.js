import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Store from "./Pages/Store";
import Blog from "./Pages/Blog";
import CompareProducts from "./components/compare/CompareProducts";
import WishList from "./components/wishlist/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/" || "#"} element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="store" element={<Store />} />
            <Route path="compareProducts" element={<CompareProducts />} />
            <Route path="favourites" element={<WishList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
