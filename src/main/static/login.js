import React from "react";
import Recover from "./recover";



import logoCompleta from './images/logoCompleta.png';
import logoSistema from './images/logoSistema.png';


export default function Login(){
    
    
    return(
        <body>
            <div className="loginCtrl">
            <div class="login">
                <div class="box_login">
                    <div class="content">
                        <img class="logoSistema" src={logoSistema} alt="Logo Instituição"/>
                        <h1>Essencial BPMS</h1>
                        <form method="POST">
                            <div class="cont_form">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <input id="username" type="text" name="username" class="input_login user" placeholder="Usuário" spellcheck="false"
                                    model="username"/>
                            </div>
                            <div class="cont_form">
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                <input id="password" class="input_login" autocomplete="off" placeholder="Senha" type="password" name="password" onkeypress="capsLock(event)"/>
                                <i id="ver" class="far fa-eye" aria-hidden="true" click="passView()"></i>

                            </div>
                            <input type="submit" name="AdminLogin" value="Login" class="btn_login" 
                                click="autenticar()"
                                />
                        </form>
                        <div class="recover">
                            <a click="showPrompt()" href=''>
                                <i class="fa fa-unlock-alt" aria-hidden="true" ></i> Recuperar Senha
                            </a>
                        </div>
                        <div class="recover">
                            <a click="showPrompt()" href=''>
                                <i class="fa fa-sign-in-alt" aria-hidden="true" ></i>Primeiro Acesso
                            </a> 
                        </div>
                        <a class="linkEssencial" aria-hidden="true" href="http://www.essencialgestaopublica.com.br">
                            <img class='logoCompleta' src={logoCompleta} alt="Essencial Gestão Pública" />
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </body>
    )
}