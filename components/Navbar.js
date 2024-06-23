import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({autenticacao, dadosUser}) => {
    const router = useRouter();
    const {isAutenticado, autenticar} = autenticacao;
    const {dadosUsuario, setDadosUsuario} = dadosUser;

    const logoff = () => {
        autenticar(false);
        setDadosUsuario({});
        router.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=> router.push('/tabela')}>Tabela</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=> router.push('/cadastrarUsuario')}>Cadastro de Usuário</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={logoff}>Deslogar</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;