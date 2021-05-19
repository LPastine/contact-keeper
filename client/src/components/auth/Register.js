// 2 - Setup the Register Form
import React, { useState } from 'react';

export const Register = () => {
    // 3 - Declare the user state variable 
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    // 4 - Destructure so that we can use these as variables
    const { name, email, password, password2 } = user;

    // 6 - Add onChange function in order to add the values to the form
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    // 7 - Create onSubmit function and add it to the form 
    const onSubmit = e => {
        e.preventDefault();
        console.log('Register submit');
    }

    return (
        // 5 - Structure & style the form
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange}/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export default Register