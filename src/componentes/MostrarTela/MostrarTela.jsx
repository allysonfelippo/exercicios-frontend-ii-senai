
import { useState } from "react";

const MostrarTela = () => {
    const [telaAtual, setTelaAtual] = useState('');

    const mostrarTela = (tela) => {
        setTelaAtual(tela);
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '8px'
        }}>
            <div style={{display: 'flex', gap: '8px'}}>
                <button 
                    title="Tela I"
                    onClick={() => mostrarTela('Conteúdo da Tela I')}>
                    Tela I
                </button>

                <button
                    title="Tela II"
                    onClick={() => mostrarTela('Conteúdo da Tela II')}>
                    Tela II
                </button>

                <button
                    title="Tela III"
                    onClick={() => mostrarTela('Conteúdo da Tela III')}>
                    Tela III
                </button>
            </div>
            <strong style={{
                display: 'flex',
                justifyContent: 'center',
                lignItems: 'center'
            }}>{telaAtual}</strong>
        </div>
    )


}

export default MostrarTela;