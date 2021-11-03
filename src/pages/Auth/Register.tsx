import React from 'react';
import { actRegister } from './module/actions';

export default function Register(
    authProps : {
        currentUser: object | null,
        authFunctions: {
            handleChange: React.ChangeEventHandler<HTMLInputElement>,
            handleSubmit: (action: Function) => void,
        }
    }
) {
    return (
        <div className="d-flex flex-row justify-content-center" style={{ maxHeight: window.innerHeight, height: '100vh' }}>
            <div className="form-group container w-50 text-center mt-4">
                <h2>Register</h2>
                <input
                    type="email"
                    name='email'
                    className="form-control my-3"
                    placeholder='Email'
                    onChange={authProps.authFunctions.handleChange} />
                <input
                    type="password"
                    name='password'
                    className="form-control my-3"
                    placeholder='Password'
                    onChange={authProps.authFunctions.handleChange} />
                <input
                    type="text"
                    name='name'
                    className="form-control my-3"
                    placeholder='Name'
                    onChange={authProps.authFunctions.handleChange} />
                <input
                    type="number"
                    name='phoneNumb'
                    className="form-control my-3"
                    placeholder='Phone Number'
                    onChange={authProps.authFunctions.handleChange} />
                <button className="btn btn-success btn-block" onClick={() => authProps.authFunctions.handleSubmit(actRegister)}>Sign Up</button>
                <div className="mt-2">
                    <span>Already have an account?</span>
                    {' '}
                    <a href="/login" className="btn btn-info btn-sm">Sign In</a>
                </div>
            </div>
            <img src="https://cdn.wallpapersafari.com/21/19/6WrNXf.jpg" width="40%" alt="Login" />
        </div>
    )
}
