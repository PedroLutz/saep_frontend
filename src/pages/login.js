import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = ({ autenticacao, dadosUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    })

    const {autenticar} = autenticacao;
    const {setDadosUsuario} = dadosUser;

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validarDados = async (e) => {
        e.preventDefault();
        let dados;
        try {
            const response = await fetch(`http://localhost:3000/api/funcionarios/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                const data = await response.json();
                dados = data;
            } else {
                console.error(`Erro ao buscar por dados de ${route}`);
            }

            if (response.ok) {
                if(!dados.error){
                    autenticar(true);
                    setDadosUsuario(dados[0]);
                    router.push('/tabela')
                    return;
                } else {
                    dados.error === 'SENHA_ERRADA' ? alert('A senha inserida está errada!') : alert('O email inserido não está cadastrado!')
                    return;
                }
                    
            } else {
                console.error(`Erro ao realizar login`);
            }
        } catch (error) {
            console.error(`Erro ao realizar login`, error);
            return false;
        }
    }

    return (
        <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ width: '100%', maxWidth: '400px' }} onSubmit={validarDados}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Endereço de email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        value={formData.email}
                        name="email" onChange={handleChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control"
                        value={formData.senha}
                        name="senha" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <Link href="cadastrarUsuario"><label className="form-check-label" for="exampleCheck1">Cadastrar novo usuário</label></Link>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Login;