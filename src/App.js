import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Nav from "./components/Nav";
import Group from './routes/Group'

function App() {
  return <Router basename={process.env.PUBLIC_URL}>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/page/:group`} element={<Group />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;
