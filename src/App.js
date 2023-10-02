
import './App.css';
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './axios/Home';
import Create from './axios/Create';
import Update from './axios/Update';
import Read from './axios/Read';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
