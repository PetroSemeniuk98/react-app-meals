import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie:title" element={<Movie />} />
          <Route path="/category/:id" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
