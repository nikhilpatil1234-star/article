import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import Notfound from "./Components/Notfound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            {/* here each id is linked and it goes to the details to the bloglist.jsx and display blogDetails.jsx */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
