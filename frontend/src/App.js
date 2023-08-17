import React, { useState } from 'react';
import './App.css';

function App() {
    const [choice, setChoice] = useState('pounds_to_kg');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const handleConvert = async () => {
        const response = await fetch('/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ choice, value }),
        });
        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div className="App">
            <label>
                Select a conversion:
                <select value={choice} onChange={e => setChoice(e.target.value)}>
                    <option value="pounds_to_kg">Pounds to Kilograms</option>
                    <option value="kg_to_pounds">Kilograms to Pounds</option>
                    <option value="inches_to_cm">Inches to Centimeters</option>
                    <option value="cm_to_inches">Centimeters to Inches</option>
                </select>
            </label>
            <br />
            <label>
                Enter value:
                <input
                    type="number"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleConvert}>Convert</button>
            <p>Result: {result}</p>
        </div>
    );
}

export default App;
