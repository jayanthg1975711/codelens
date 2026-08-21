import Header from "./Header"
import { useState } from "react"
function App() {
  const name = "CodeLens";
  
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  function handleClick() {
  console.log("Analyze clicked");
  if (code.length === 0) {
  setResult("No code entered.");
}
else if (code.includes("function")) {
  setResult("This code contains a function.");
}
else if (language === "Python") {
  setResult("You selected Python.");
}
else{
   setResult("You entered " + code.length + " characters.");
}
 
}
  return (
  <div>
    <Header name={name} />
    <select  value={language}
     onChange={(e) => setLanguage(e.target.value)}>
       <option>JavaScript</option>
       <option>Python</option>
       <option>C++</option>
    </select>
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