import BotaoContador from './componentes/BotaoContador/BotaoContador';
import IMC from './componentes/CalcIMC/IMC';
import Contador from './componentes/Contador/Contador';
import MostrarTela from './componentes/MostrarTela/MostrarTela';

function App() {
  return (
    <>
      <span>
        exercício 1: Botão Contador
        <BotaoContador />
      </span>

      <hr />

      <span>
        exercício 2: Contador
        <Contador />
      </span>

      <hr />

      <span>
        exercício 3: Mostrar na tela
        <MostrarTela />
      </span>

      <hr />

      <span>
        exercício 10
        <IMC />
      </span>

      <hr />
    </>
  );
}

export default App;
