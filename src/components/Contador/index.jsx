
import { useState } from "react";
import "./style.css";

export function Contador(props){
    const [counter, setCounter] = useState(0);

    const handClickIncrement = () => {
      setCounter(counter +1);
    }

    const handClickDecrement = () => {
      setCounter (counter -1);
    }
    
    return (
        <div>
        <h1>
          Contador
        </h1>

        <div className="buttons">
        <button onClick={handClickIncrement}>Inclement</button>
        <button onClick={handClickDecrement}>Decrement</button>

        </div>
        <div className="result">
            <strong>{counter}</strong>

        </div>
      </div>
    )
}