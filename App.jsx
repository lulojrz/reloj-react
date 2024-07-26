import React, { useState } from 'react';
import Hora from './components/hora';
import HoraLatam from './components/horalatam';
import Cronometro from './components/cronometro';

function App() {
  const [componenteMostrado, setComponenteMostrado] = useState(null);

  const mostrarComponente = (componente) => {
    setComponenteMostrado(componente);
  };

  return (
    <>
      <div className='container-buttons'>
        <button id='hora' onClick={() => mostrarComponente(<Hora />)}>Hora</button>
        <button id='cronometro'onClick={() => mostrarComponente(<Cronometro/>)}>Cronometro</button>
        <button id='hora-latam' onClick={() => mostrarComponente(<HoraLatam/>)}>Hora Latam</button>
      </div>
      <div className="content">
        {componenteMostrado}
      </div>
    </>
  );
}

export default App;
