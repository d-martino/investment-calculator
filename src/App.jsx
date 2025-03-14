import { useState } from "react";
import Header
 from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

const initialUserInput = {
  initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10
}

function App() {

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputIsValid = userInput.duration > 0;
  
      function handleChange(inputIdentifier, newValue) {
          setUserInput((prevUserInput) => {
              return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
              };
          });
      }

  return (
    <>
      <Header />
      <UserInput input={userInput} onChangeUserInput={handleChange}/>
      {!inputIsValid && <p className="center">Duration must be greater than zero!</p> }
      {inputIsValid && <Result input={userInput}/> }
    </>
  );
}

export default App
