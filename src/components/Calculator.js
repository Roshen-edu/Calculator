
import React, { useState } from 'react';
import * as math from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(math.evaluate(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator card shadow-lg">
      <div className="card-body">
        <div className="display-screen card-header bg-light">
          <div className="input-display form-control text-right">{input}</div>
          <div className="result-display h3 text-right">{result}</div>
        </div>
        <div className="buttons container">
          <div className="row">
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('7')}>7</button></div>
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('8')}>8</button></div>
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('9')}>9</button></div>
            <div className="col-3"><button className="btn btn-outline-teal btn-block operation-button" onClick={() => handleButtonClick('/')}>/</button></div>
          </div>
          <div className="row">
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('4')}>4</button></div>
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('5')}>5</button></div>
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('6')}>6</button></div>
            <div className="col-3"><button className="btn btn-outline-teal btn-block operation-button" onClick={() => handleButtonClick('*')}>*</button></div>
          </div>
          <div className="row">
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('1')}>1</button></div>
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('2')}>2</button></div>
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('3')}>3</button></div>
            <div className="col-3"><button className="btn btn-outline-teal btn-block operation-button" onClick={() => handleButtonClick('-')}>-</button></div>
          </div>
          <div className="row">
            <div className="col-3"><button className="btn btn-light btn-block number-button" onClick={() => handleButtonClick('0')}>0</button></div>
            <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('.')}>.</button></div>
            <div className="col-3"><button className="btn btn-danger btn-block" onClick={handleClear}>C</button></div>
            <div className="col-3"><button className="btn btn-outline-teal btn-block operation-button" onClick={() => handleButtonClick('+')}>+</button></div>
          </div>
          <div className="row">
            <div className="col-9"><button className="btn btn-primary btn-block" onClick={handleCalculate}>=</button></div>
            <div className="col-3"><button className="btn btn-secondary btn-block" onClick={() => setShowAdvanced(!showAdvanced)}>More</button></div>
          </div>
          {showAdvanced && (
            <div className="advanced-buttons mt-3">
              <div className="row">
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('(')}>(</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick(')')}>)</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('sqrt(')}>√</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('^')}>^</button></div>
              </div>
              <div className="row">
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('factorial(')}>n!</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('combinations(')}>nCr</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('permutations(')}>nPr</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('^' + '2')}>x²</button></div>
              </div>
              <div className="row">
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('^' + '3')}>x³</button></div>
                <div className="col-3"><button className="btn btn-light btn-block" onClick={() => handleButtonClick('1/')}>1/x</button></div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-12">
              <p className="text-muted small mt-2">
                Use 'i' for complex numbers, [1,2;3,4] for matrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
