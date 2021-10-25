import React, { useState } from 'react';
import userApi from '../../apis/userApi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actRegister } from './module/actions';

export default function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        phoneNumb: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value.toString(),
        }))
    }

    const handleSubmit = () => {
        console.log(user);
        dispatch(actRegister(user, history));
    }

    return (
        <div className="d-flex flex-row justify-content-center" style={{ maxHeight: window.innerHeight, height: '100vh' }}>
            <div className="form-group container w-50 text-center mt-4">
                <h2>Register</h2>
                <input
                    type="email"
                    name='email'
                    className="form-control my-3"
                    placeholder='Email'
                    onChange={handleChange} />
                <input
                    type="password"
                    name='password'
                    className="form-control my-3"
                    placeholder='Password'
                    onChange={handleChange} />
                <input
                    type="text"
                    name='name'
                    className="form-control my-3"
                    placeholder='Name'
                    onChange={handleChange} />
                <input
                    type="number"
                    name='phoneNumb'
                    className="form-control my-3"
                    placeholder='Phone Number'
                    onChange={handleChange} />
                <button className="btn btn-success btn-block" onClick={handleSubmit}>Sign Up</button>
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
