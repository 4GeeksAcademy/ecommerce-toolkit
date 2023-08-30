import React, { useState } from "react";

export const CreateAccount = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        const data = {
            name: name,
            email: email,
            password: password
        };
        let url = String(process.env.BACKEND_URL + "api/newcostumer");
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
                console.log("Success:", data);
                alert("Account created successfully");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error creating account");
            });
    };

    return (
        <div className="container my-5">
            <h2>Create account</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label"> Name: </label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Email: </label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Password: </label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label"> Confirm Password: </label>
                    <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="container d-flex justify-content-center mb-3">
                    <button type="submit" className="btn bg-primary-subtle">Create account</button>
                </div>

            </form>
        </div>
    );
};