import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App({ Component, pageProps }) {
  const [autenticado, setAutenticado] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState({});

  const autenticacao = {isAutenticado: autenticado, autenticar: setAutenticado}
  const dadosUser = {dadosUsuario: dadosUsuario, setDadosUsuario: setDadosUsuario}

  return (
    <>
        <Component {...pageProps} 
        autenticacao={autenticacao}
        dadosUser={dadosUser} />
    </>
  )
    ;
}

export default App;