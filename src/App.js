import './App.css';
import Navbar from './Navbar'
import Home from './Home'

// This is JSX Template
function App() {

  // Numbers and Strings are allowed but booleans and objects are not
  const msg = "Welcome to the dogo-blog"
  const link = "https://www.google.com/"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
