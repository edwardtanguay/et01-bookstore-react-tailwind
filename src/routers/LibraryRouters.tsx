import { Navigate, Route, Routes } from "react-router-dom";
import Books from "../pages/Books";
import About from "../pages/About";
import BookInfo from "../components/BookInfo";

const LibraryRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/book" />} />
        <Route path="/book" element={<Books />} />
        <Route path="/book/:bookId" element={<BookInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default LibraryRouters;
