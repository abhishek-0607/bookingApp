import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Hotel } from "./pages/Hotel/Hotel";
import { List } from "./pages/List/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hotels" element={<List />} />
        <Route exact path="/hotels" element={<List />} />
        <Route exact path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
