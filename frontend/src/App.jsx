import Header from "./Header"
import { useState } from "react"
function App() {
  const name = "CodeLens";
  
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  function handleClick() {
  console.log("Analyze clicked");
  if (code.length === 0) {
  setResult("No code entered.");
}
else if (code.includes("function")) {
  setResult("This code contains a function.");
}
else{
   setResult("You entered " + code.length + " characters.");
}
 
}
  return (
  <div>
    <Header name={name} />
      
      <textarea
         value={code}
         onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <p>{result}</p>
      <button onClick={handleClick}>Analyze</button>
  </div>
  )
}

export default App