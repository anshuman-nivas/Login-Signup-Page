import { useState } from "react";
import styles from "./Login.module.css"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // Handle login logic here, such as sending a request to the server.
    }

    return (
        <div>
            <h2 className={styles.logintab} >Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input className="form-control"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input className="form-control"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;