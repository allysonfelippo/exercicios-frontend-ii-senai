import { useState } from "react";

const BotaoContador = () => {
    const [number, setNumber] = useState(0)

    return <div>
        <button onClick={()=> setNumber(number+1)}>Contador: {number}</button>
    </div>
}

export default BotaoContador;