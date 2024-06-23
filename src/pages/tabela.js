import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { buscarDados } from "../../functions/crud";

const Tabela = ({autenticacao, dadosUser}) => {
    const[dados, setDados] = useState({});
    const[veiculos, setVeiculos] = useState();
    const{dadosUsuario, setDadosUsuario} = dadosUser;
    const{isAutenticado, autenticar} = autenticacao;
    const router = useRouter();

    useEffect(() => {
        !isAutenticado && router.push('/login')
        setDados(dadosUsuario);
        fetchVeiculosPorConcessionaria();
    });

    function fetchVeiculosPorConcessionaria() {
        console.log(dados.concessionarias_id);
        // const dadosVeiculos = await buscarDados(`automoveis/por_concessionaria/${dados.concessionarias_id}`)
    }

    return(
        <div>
            macaco: {dados.email}<br/>
            concessionarias_id: {dados.concessionarias_id}
        </div>
    )
}

export default Tabela;