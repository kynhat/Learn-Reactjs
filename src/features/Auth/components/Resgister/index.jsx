import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../ResgisterForm';


const Register = () => {

    const dispatch = useDispatch();

    const handleSubmit = async (value) => {
        
        try {
            //auto set username = email

            value.username = value.email;
            const action = register(value);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('New user:', user);

        }catch(error) {
            console.log('failed to register: ',error)
        }

    }

    return (
    <div>
        <RegisterForm onSubmit={handleSubmit} />
    </div>
    )
}

export default Register ;
