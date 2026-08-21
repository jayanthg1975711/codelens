import Header from "./Header"
import { useState } from "react"
import CodeEditor from "./CodeEditor"
import AnalysisResult from "./AnalysisResult"
import "./App.css"
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
else if (language === "JavaScript" && code.includes("function")) {
  setResult("This JavaScript code contains a function.");
}
else if (language === "Python" && code.includes("def")) {
  setResult("This Python code contains a function.");
}
else if (language === "C++" && code.includes("#include")) {
setResult("This C++ code contains an include statement.");
}
else{
   setResult("You entered " + code.length + " characters.");
}
 
}
  return (
  <div className="app">
    <Header name={name} />
    <label htmlFor="language">Language</label>
    <select  value={language}
     onChange={(e) => setLanguage(e.target.value)}
     id="language">
       <option>JavaScript</option>
       <option>Python</option>
       <option>C++</option>
    </select>
      
      <CodeEditor code={code} setCode={setCode} />
      <AnalysisResult result={result} />
      <button className="analyze-button" onClick={handleClick}>
         Analyze
         </button>
  </div>
  )
}

export default App