import React from 'react';
import '../styles/login.css';

let login_url = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=98e0e43c1b1c4163afdd73d0b914d4f7';

const Login = () => (
    <div className="login">
        <p>Please, login with Yandex OAuth</p>
        <a href={login_url} >Login</a>
    </div>
);

export default Login;