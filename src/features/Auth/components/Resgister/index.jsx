import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../ResgisterForm';


const Register = (props) => {

    const dispatch = useDispatch();
    // const {enqueueSnackbar} = useSnackbar();
    const handleSubmit = async (value) => {

        try {
            //auto set username = email

            value.username = value.email;
            const action = register(value);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            const { closeDialog } = props;

            if(closeDialog) {
                closeDialog();
            }

            // enqueueSnackbar("Register successfully!!", {variant:'success'});
            
        }catch(error) {
            console.log('failed to register: ',error)
            // enqueueSnackbar(error.message, {variant:'error'});

        }
    }

    return (
    <div>
        <RegisterForm onSubmit={handleSubmit} />
    </div>
    )
}

export default Register ;
