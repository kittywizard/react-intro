import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="react logo" className="img"></img>

      <h3>Fun facts about React</h3>
      <ul>
        <li> Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has over 100k stars on Github</li>
        <li>Maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile</li>
      </ul>
    </div>
  );
}

export default App;
