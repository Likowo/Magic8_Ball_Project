import './App.css';

//---------------Imports
import responses from './models/responses';
import Button from './Components/Button';
import { useState, useEffect } from 'react';






function App() {
  // 1.Initializing the useState (i.e. Setting Initail State in a Component using useState)
   // Create a fxn for the input tag with userInput as the variable containing the state and setUserInput as the fxn that will update the state ,and usestate as the initial state
  const [userInput, setUserInput] = useState('')
     //2. Create a fxn for the randomizing the responses from the models file with randomIndax as the variable and setRandomIndex as the fxn and usestate as the initial state
     const [randomIndax, setRandomIndex] = useState(``)
// 3. useEffect hook - 2 parts; a callback function where logic or code is written and a dependency array that runs the logic whenever there is a change 
     useEffect(() => {
        console.log( 'Your question')
     },
     [userInput]);

  



  return (
    // Creating the structure of the page with a parent div with className, App and a child div having a button
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
