import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import CategoryPage from "./components/CategoryPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-2xl mx-auto">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://w0.peakpx.com/wallpaper/718/151/HD-wallpaper-carpe-diem.jpg"
                  alt="Banner"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <Header />
                  <p className="mt-4 text-sm text-muted-foreground">
                    A blend of cultures, an eclectic food style. Sample
                    Mediterranean & Asian cuisines with Arabian & Morrocan
                    touches. Our artfully prepared food, our decoration together
                    with the glamour at night will transport you and enhance all
                    of your senses. Enjoy an unforgettable experience at the
                    Carpediem official ambassador of Dom Pérignon & awarded as
                    one of the Finest Clubs in the world.
                  </p>
                  <Navigation />
                </div>
              </div>
              <Menu />
            </div>
          }
        />
        <Route path="/categories/:categoryId" element={<CategoryPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
