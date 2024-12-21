import { useContext } from "react";
import { AutenticacaoContext } from "../contexts/AutenticacaoContext";

function Login() {

    const { setLogado } = useContext(AutenticacaoContext)

    function acessar() {
        // PEGA OS DADOS DOS CAMPOS
        // VERIFICA SE A SENHA E LOGIN EXISTE
        // AGORA PERMITE AO USUARIO ACESSAR O SISTEMA.
        setLogado(true)
    }

    return (
        <>
            <form action="">
                <input type="text" />
                <input type="password" />
            </form>
            Login
            <button onClick={acessar}>Acessar</button>
        </>
    )
}

export default Login;