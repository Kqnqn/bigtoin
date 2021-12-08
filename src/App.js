import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      minHeight: "100vh",
      color: "#FFFFFF",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
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
