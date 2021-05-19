// 2 - Setup the Register Form
import React, { useState } from 'react';

export const Login = () => {
    // 3 - Declare the user state variable 
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    // 4 - Destructure so that we can use these as variables
    const { email, password } = user;

    // 6 - Add onChange function in order to add the values to the form
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    // 7 - Create onSubmit function and add it to the form 
    const onSubmit = e => {
        e.preventDefault();
        console.log('Login submit');
    }

    return (
        // 5 - Structure & style the form
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Login