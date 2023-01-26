import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./users/pages/Users";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
