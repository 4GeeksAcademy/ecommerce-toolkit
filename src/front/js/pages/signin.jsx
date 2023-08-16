import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
      // TODO: Handle form submission
    };

    return (
        <div className="container">
            <h2 className="mt-3">Sign In</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label"> Email: </label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label"> Password: </label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div className="container d-flex justify-content-center mb-3">
                    <button type="submit" className="btn bg-primary-subtle">Sign in</button>
                </div>

                <div className="container d-flex justify-content-center">
                    <Link to="/createaccount">Create account</Link>
                </div>

            </form>
        </div>
    );
};