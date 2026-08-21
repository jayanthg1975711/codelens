function CodeEditor({ code, setCode }) {
  return (
    <>
      <label htmlFor="code">Your code</label>
      <textarea
        id="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      ></textarea>
    </>
  );
}

export default CodeEditor;