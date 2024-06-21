import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { buscarDados } from "../../functions/crud";

const Tabela = ({autenticacao, dadosUser}) => {
    const[dados, setDados] = useState({});
    const[veiculos, setVeiculos] = useState();
    const{dadosUsuario, setDadosUsuario} = dadosUser;
    const{isAutenticado, autenticar} = autenticacao;
    const router = useRouter();

    const fetchVeiculosPorConcessionaria = async () => {
        console.log(dados.concessionarias_id);
        const dadosVeiculos = await buscarDados(`automoveis/por_concessionaria/${dados.concessionarias_id}`)
    }

    useEffect(() => {
        !isAutenticado && router.push('/login')
        setDados(dadosUsuario);
        fetchVeiculosPorConcessionaria();
    }, []);


    return(
        <div>
            macaco: {dados.email}
        </div>
    )
}

export default Tabela;