import LogIn from 'pages/Auth/LogIn';
import Register from 'pages/Auth/Register';
import { PageNotFound } from 'pages/General/page-not-found/PageNotFound';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { RootState } from 'store/store';

export default function AuthTemplate(pageName: string) {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.authReducer.currentUser);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }))
        console.log(user)
    }

    const handleSubmit = (action: Function) => {
        console.log(user);

        dispatch(action(user, history));

    }

    const authProps : {
        currentUser: object | null,
        authFunctions: {
            handleChange: React.ChangeEventHandler<HTMLInputElement>,
            handleSubmit: (action: Function) => void,
        }
    }
    = {
        currentUser,
        authFunctions: {
            handleChange,
            handleSubmit,
        }
    }
    if(currentUser) return <Redirect to="/" />;
    switch (pageName) {
        case 'Login':
            return <LogIn {...authProps} />;
        case 'Register':
            return <Register {...authProps} />;

        default:
            return <PageNotFound />;
    }
    // return (
    //     <div>
    //         ABC
    //     </div>
    // )
}
