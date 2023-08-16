import { useState } from "react";
import styles from "./Signup.module.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here, such as sending a request to the server.
    };


    return (
        <div>
            <h2 className={styles.signuptab} >Signup</h2>
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
