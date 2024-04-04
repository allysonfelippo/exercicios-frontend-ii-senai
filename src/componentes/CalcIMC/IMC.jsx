import React from "react";

const IMC = () => {

    const [altura, setAltura] = React.useState();
    const [peso, setPeso] = React.useState();

    const calcularIMC = () => {
        peso / (altura * altura)
    }

    return (
        <div style={{ display: 'flex', gap: '8px', paddingTop: '8px' }}>
            <span>Altura(m)</span>
            <input
                type="number"
                value={altura}
            />
            <span>Peso(Kg)</span>
            <input
                type="number"
                value={peso}
            />
            <button onClick={calcularIMC}>Calcular IMC</button>
        </div>
    )
}

export default IMC;