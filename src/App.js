import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Details from './pages/Details';
import Gallery from './pages/Gallery'
import Contact from './pages/Conatct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/events" Component={Events}></Route>
          <Route path="/events/:id" Component={Details}></Route>
          <Route path="/gallery" Component={Gallery}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
