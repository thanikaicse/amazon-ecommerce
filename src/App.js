import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <>
      <Home/>
      </>      
    </div>
    </Router>
  );
}

export default App;
