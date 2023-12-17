import "./App.css";
import useWordCount from "./hooks/useWordCount";

function App() {
  const { text, wordCount, handleTextChange } = useWordCount('');
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <input type="text" value={text} data-testid='input-box' onChange={handleTextChange} />
      <p data-testid='word-count'>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
