import React, { useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = React.useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let url = process.env.BACKEND_URL + "api/signin";

        const data = {
            email: email,
            password: password
        };
        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                if (typeof (data) == "string")
                    alert(data);
                else {
                    actions.setUser(data.id, data.is_admin);
                    alert("Sign in successful");
                    return navigate("/");
                }
            }
            );
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