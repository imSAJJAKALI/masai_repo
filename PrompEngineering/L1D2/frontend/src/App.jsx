import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [convertedData,setConvertedData]=useState('')

  const handleConvert = () => {
    axios
      .post('https://codeconvertor-ze5y.onrender.com/convert', {
        code: code, // Send the code
        language: language, // Send the selected language
      })
      .then((res) => {
        // Handle the API response here
        console.log(res.data); 
        setConvertedData(res.data)
        // Assuming the response contains the converted code
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDebug = () => {
    axios
      .post('https://codeconvertor-ze5y.onrender.com/debug', {
        code: code, // Send the code
             })
      .then((res) => {
        // Handle the API response here
        console.log(res.data); 
        setConvertedData(res.data)
        // Assuming the response contains the converted code
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleQuality = () => {
    axios
      .post('https://codeconvertor-ze5y.onrender.com/checkquality', {
        code: code, // Send the code
      
      })
      .then((res) => {
        // Handle the API response here
        console.log(res.data); 
        setConvertedData(res.data)
        // Assuming the response contains the converted code
      })
      .catch((error) => {
        console.error(error);
      });
  };
const handleClear=()=>{
  setConvertedData("")
  setCode("")
}

  return (
    <div className="App">
      <div className='mainSection'>
        <div>
          <select name="" id="" onChange={(e) => setLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="c++">C++</option>
            <option value="typescript">Typescript</option>
          </select>
        </div>
        <div>
          <button onClick={() => handleClear()}>Clear</button>
        </div>
        <div>
          <button onClick={() => handleConvert()}>Convert</button>
        </div>
        <div>
          <button onClick={() => handleDebug()}>Debug</button>
        </div>
        <div>
          <button onClick={() => handleQuality()}>Quality Check</button>
        </div>
      </div>

      <div className='midSection'>
        <div className="leftsection">
          <h1>Input Code</h1>
          <textarea
             
            onChange={(e) => setCode(e.target.value)}
            name='code'
            placeholder='Write Your Code here.....'
            value={code} // Bind the textarea value to the code state
          />
        </div>

        <div className="rightsection">
          <h1 >Output Result</h1>
          <pre>{convertedData.codes}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
