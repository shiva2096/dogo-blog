import './App.css';

// This is JSX Template
function App() {

  // Numbers and Strings are allowed but booleans and objects are not
  const msg = "Welcome to the dogo-blog"
  const link = "https://www.google.com/"
  return (
    <div className="App">
      <div className="content">
        <h1>
          App Content
        </h1>

        <p>{msg}</p>
        <p>{10}</p>
        <p>{"Hello World"}</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Home</a>
      </div>
    </div>
  );
}

export default App;
