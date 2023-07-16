// Open the jsx boilerplate using rfce
import React from 'react';
import { useState, useEffect } from 'react';

function Button(props) {
//Initializing the useState (i.e. Setting Initail State in a Component using useState)
    const [userInput, setUserInput] = useState('')

    //Input with onChange method // create a method ( also know as a call back function) called handleQuestionChange with parameter event
      const handleQuestionChange = (event) => {
        //To prevent  the page from reloading upon clicking the Try Again button, use the event.preventDefault method
        event.preventDefault();
        // To access the string of responses,use event.target.value and //Update the userInput variable by using setUserInput
        console.log(event.target.value);
        setUserInput(event.target.value);
      }
    //Add an attribute called value to the self closing input tag
    <input type="text" className="question" value={userInput}/>
 

  return (
    <div>
        <button> Try Again </button>
    </div>
  )
}

export default Button