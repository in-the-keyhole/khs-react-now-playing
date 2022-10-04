import { useNavigate } from "react-router-dom";
import useLocalStorageState from 'use-local-storage-state'

import './Login.css';

function Login() {
    const [loggedIn, setLoggedIn] = useLocalStorageState("loggedIn", { defaultValue: false });
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoggedIn(true);
        navigate("/");
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username </label>
                <input type="text" id="username" name="username" /><br /><br />
                <label htmlFor="password">Password </label>
                <input type="text" id="password" name="password" />
                <input className="loginBtn" type="submit" value="Log In" />
            </form>
        </div>
    );
}

export default Login;
