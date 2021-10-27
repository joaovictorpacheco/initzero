import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
import { userAuth, parseJwt } from '../../services/auth';



import './login.css';

import logo from '../../assets/img/logo.png';


export const Login = () => {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    function efetuaLogin(event){
        event.preventDefault();
        const userInfo = {
            email: email,
            password: password
        }
        axios.post("http://localhost:39956/api/Login/signin", {
            email: email,
            password: password
        })
        .then(resposta => {
            if(resposta.data.sucess){
                console.log('Logado com sucesso')
                localStorage.setItem('userLogin', resposta.data.data.token)
                let base64 = localStorage.getItem('userLogin').split('.')[1]
                console.log(JSON.parse(window.atob(base64)))
                if(parseJwt().role == "Admin" || parseJwt().role == "Colaborador"){
                    history.push("/teste")
                }
                setErrorMessage('')
            } else if(!resposta.data.sucess) {
                setErrorMessage(resposta.data.message)
                console.log(errorMessage)
            }
        })
        .catch(erro => console.log(erro))
    }

    return(
        <div>
            <main>
                <section className="container-login flex">
                    <div className="img__login"><div className="img__overlay"></div></div>

                    <div className="item__login">
                        <div className="row">
                            <div className="item">
                                <Link to="/"><img src={logo} className="icone__login" alt="logo da Gufi" /></Link>
                            </div>
                            <div className="item" id="item__title">
                                
                            </div>

                            {/* Faz a chamada para a função de login quando o botão é pressionado */}
                            <form onSubmit={efetuaLogin}>
                                <div className="item">
                                    <input
                                        id="login__email"
                                        className="input__login"
                                        // E-mail
                                        type="text"
                                        name="email"
                                        // Define que o input email recebe o valor do state email
                                        value={email}
                                        // Faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                        onChange={(event) => {setEmail(event.target.value)}}
                                        placeholder="Insira seu email"
                                    />
                                </div>

                                <div className="item">
                                    <input 
                                        id="login__password"
                                        className="input__login"
                                        // Senha
                                        type="password"
                                        name="password"
                                        // Define que o input senha recebe o valor do state senha
                                        value={password}
                                        // Faz a chamada para a função que atualiza o state, conforme
                                        // o usuário altera o valor do input
                                        onChange={(event) => {setPassword(event.target.value)}}
                                        placeholder="Insira sua senha"
                                    />
                                </div>

                                <p>{errorMessage}</p>
                                
                                <div className="item">
                                    <button
                                        className="btn btn__login" id="btn__login"
                                        type="submit"
                                        disabled={email === '' || password === '' ? 'none' : ''}
                                    >
                                        Entrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
    
};

export default Login;