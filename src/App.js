import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";
import { Category } from "./pages/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <Header />

      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipe />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
