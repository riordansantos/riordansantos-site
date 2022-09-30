import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/home/index";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Home/>
    <Route exact path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
