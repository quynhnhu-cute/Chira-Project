import React from 'react';
import { actLogin } from './module/actions';

export default function LogIn(
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
            <img src="https://images.discerningassets.com/image/upload/c_fit,h_1000,w_1000/c_fit,fl_relative,h_1.0,l_ammaidtawnihnrcdopqc,o_40,w_1.0/v1530144929/colorado-photos_DSC0887-Edit-XL-Vert_mz4vfk.jpg" width="40%" alt="Login" />
            <div className="form-group container w-50 text-center mt-4">
                <h2>Log In</h2>
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
                <button className="btn btn-success btn-block" onClick={() => authProps.authFunctions.handleSubmit(actLogin)}>Log In</button>
                <div className="social__media mt-2">
                    <button className="btn btn-primary">
                        <i className="fab fa-facebook">Face</i>
                    </button>
                    {' '}
                    <button className="btn btn-primary">
                        <i className="fab fa-facebook">Tweet</i>
                    </button>
                </div>
                <div className="mt-2">
                    <span>New member?</span>
                    {' '}
                    <a href="/register" className="btn btn-info btn-sm">Sign Up</a>
                </div>
            </div>
        </div>
    )
}
