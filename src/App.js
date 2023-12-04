import logo from './logo.svg';
import './App.css';
import { LandingPage } from './Components';

function App() {
  let a = 3
  return a > 2 ? <LandingPage /> : <div>Hi</div>
}

export default App;
