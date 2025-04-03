import { useState } from "react";

function ChangeExample() {
 

  const [inputValue, setInputValue] = useState("");

  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);

  };

const [raj, setraj] = useState("- Entry Point");

  const handleclickNew = (a) => {
    alert("This is clicked" + " " + (a * 10))
    
  }
 
  const handleclick = () => {
    setDisplayValue(inputValue);
             alert(`Apne ${inputValue} number enter liya`);
  } 

  return (
    <div>

      <input type="text" value={inputValue} onChange={handleChange} />

      <p>{inputValue} </p>

      <button onClick={handleclick}>Click</button> 

    

      <p>Entered Value: {displayValue}</p>
        <button onClick={()=>handleclickNew(100)}>Click Me</button>
    </div>
  );
}

export default ChangeExample;
