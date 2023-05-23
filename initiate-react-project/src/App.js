import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import About from "./pages/About"
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
