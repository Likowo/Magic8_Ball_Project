import './App.css';

//---------------Imports
import responses from './models/responses';
import Button from './Components/Button';


// 1.Initializing the useState


function App() {
  // 1.Initializing the useState


  return (
    // Creating the structure of the page with a parent dic with className, App and a child div
    <div className="App">
       <h1> Welcome to Magic 8 Ball Chamber </h1>
       <p className='info' > Ask Whatever You Like and Press the Try Again Button to see your Furture..  </p>
    {/* // use a self closing input tag for user to ask their questions   */}
      <input type='text' className='question'/>
      <div>
        <button> Try Again </button>
      </div>
    </div>
  );
}

export default App;
