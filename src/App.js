import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact></Route>
        </Routes>
        <Routes>
          <Route path="/coins" element={<Coinpage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Coinpage />}></Route>
        </Routes> */
}
