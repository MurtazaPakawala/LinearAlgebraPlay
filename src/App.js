import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import RowCol from './pages/RowCol';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/rowcol' element={<RowCol />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
