import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import RowCol from './pages/RowCol';
import Solution from './pages/Solution';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rowcol' element={<RowCol />} />
          <Route path='/solution' element={<Solution />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
