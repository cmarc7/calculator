import './App.css';
import Button from './componentes/Button';
import Input from './componentes/Input';
import Clear from './componentes/Clear';
import Delete from './componentes/Delete';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(0);

  const agregarInput = value=> {
    if(input == 0 || input == "Error!" || input == "Infinity") {
      setInput(value);
    } else {
    setInput(input + value);
    }
  };

  const signos = signo=> {
    try {
      let lastInput = input.slice(-1);
      if(signo.length == 1) {
        setInput(input + signo);
      }
      if(signo === lastInput) {
        setInput(input);
      }
    } catch {
          setInput(input + signo);
    }
  }

  const dl = ()=> {
    try {
      if(input.length == 1 || input == "Error!" || input == "Infinity") {
      setInput(0);
      } else {
        setInput(input.slice(0, -1));
      }
    } catch {
        setInput(0);
    }
  }

  const clear = ()=> {
    setInput(0);
  };

  const resultado = ()=> {
    try {
      if (input) {
        setInput(evaluate(input));
      }
      if(document.querySelector('.input').textContent === Infinity) {
        setInput(alert("No es posible dividir entre cero"));
      }
    } catch {
          setInput('Error!');
    }
  };

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Input input={input}/>
        <div className='row'>
          <Clear clear={clear}/>
          <Delete dl={dl}/>
          <Button handlerClick={signos}>%</Button>
          <Button handlerClick={signos}>/</Button>
        </div>
        <div className='row'>
          <Button handlerClick={agregarInput}>7</Button>
          <Button handlerClick={agregarInput}>8</Button>
          <Button handlerClick={agregarInput}>9</Button>
          <Button handlerClick={signos}>*</Button>
        </div>
        <div className='row'>
          <Button handlerClick={agregarInput}>4</Button>
          <Button handlerClick={agregarInput}>5</Button>
          <Button handlerClick={agregarInput}>6</Button>
          <Button handlerClick={signos}>-</Button>
        </div>
        <div className='row'>
          <Button handlerClick={agregarInput}>1</Button>
          <Button handlerClick={agregarInput}>2</Button>
          <Button handlerClick={agregarInput}>3</Button>
          <Button handlerClick={signos}>+</Button>
        </div>
        <div className='row'>
          <Button handlerClick={agregarInput}>0</Button>
          <Button handlerClick={agregarInput}>.</Button>
          <Button handlerClick={resultado}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;