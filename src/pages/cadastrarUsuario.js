import Link from "next/link";
import { enviarDados } from "../../functions/crud";
import { useState, useEffect } from "react";

const CadastrarUsuario = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        celular: '',
        data_nascimento: '',
        email: '',
        senha: '',
        concessionarias_id: ''
    });

    const enviar = (e) => {
        e.preventDefault();
        let registroSucesso = false;

        const celular = formData.celular;
        const celularLimpo = celular.replace('-', '').replace(' ', '').replace('(', '').replace(')', '');

        const dadosParaEnvio = {
            ...formData, celular: celularLimpo
        }

        registroSucesso = enviarDados({
            route: 'funcionarios',
            dados: dadosParaEnvio
        })
        if (registroSucesso) {
            alert("Cadastro realizado com sucesso! Volte para a página de login.")
            setFormData({
                nome: '',
                cpf: '',
                celular: '',
                data_nascimento: '',
                email: '',
                senha: '',
                concessionarias_id: ''
            })
        }
    }

    const handleCPF = (event) => {
        function cpfMask(value) {
            if (!value) return "";
            value = value.replace(/\D/g, '');
            if (value.length <= 6) {
                value = value.replace(/^(\d{3})(\d)/, '$1.$2');
            } else if (value.length <= 9) {
                value = value.replace(/^(\d{3})(\d{3})(\d)/, '$1.$2.$3');
            } else {
                value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
            };
            return value;
        }
        let input = event.target;
        input.value = cpfMask(input.value);
    };

    const handleTelefone = (event) => {
        function telefoneMask(value) {
            if (!value) return "";
            value = value.replace(/\D/g, '');
            if (value.length <= 8) {
                value = value.replace(/^(\d{2})(\d)/, '($1) $2');
            } else {
                value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3');
            };

            return value;
        }
        let input = event.target;
        input.value = telefoneMask(input.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ width: '100%', maxWidth: '400px' }} onSubmit={enviar}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        value={formData.nome}
                        name="nome" onChange={handleChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">CPF</label>
                    <input type="text" className="form-control"
                        value={formData.cpf} onKeyUp={handleCPF} maxLength={14}
                        name="cpf" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Celular</label>
                    <input type="text" className="form-control"
                        value={formData.celular} onKeyUp={handleTelefone} maxLength={15}
                        name="celular" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Data de nascimento</label>
                    <input type="date" className="form-control"
                        value={formData.data_nascimento}
                        name="data_nascimento" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control"
                        value={formData.email}
                        name="email" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input type="password" className="form-control"
                        value={formData.senha}
                        name="senha" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Concessionária</label>
                    <input type="password" className="form-control"
                        value={formData.concessionarias_id}
                        name="concessionarias_id" onChange={handleChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <Link href="login"><label className="form-check-label" htmlFor="exampleCheck1">Fazer login</label></Link>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default CadastrarUsuario;