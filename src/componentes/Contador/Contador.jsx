import './Contador.css';

import { useState } from "react";

const Contador = () => {
    const [number, setNumber] = useState(0)
    
    return (
    <div className="caixa-exercicio-dois">
        <span >{number}</span>
        <div style={{display: 'flex', gap: '8px'}}>
        <button className="botao-contador" style={{backgroundColor: 'chocolate'}} onClick={() => setNumber(number -1)}>-</button>
        <button className="botao-contador" style={{backgroundColor: 'green'}} onClick={() => setNumber(number + 1)}>+</button>
        </div>
    </div>
    )
}

export default Contador;