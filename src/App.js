import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/home/index";
import Sobre from "./pages/sobre/index";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Home/>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
