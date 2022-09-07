import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header.component";
import Houses from "./components/houses/houses.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Header />}>
            <Route index element={<Houses />}></Route>
         </Route>
         <Route path=":house" element={<Footer />}>NJK</Route>
      </Routes>
   );
}

export default App;
