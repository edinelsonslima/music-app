import {
    createUserWithEmailAndPassword,
    Auth,
    // sendEmailVerification,
} from 'firebase/auth';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Authentication } from '../../../services/firebase';
import { errorLogin } from '../../functions';

const useCreateUser = () => {
    const history = useHistory(),
        [email, setEmail] = useState(''),
        [pass, setPass] = useState(''),
        [isNext, setIsNext] = useState(false),
        [loadingSigIn, setLoadingSigIn] = useState(false),
        [typeError, setTypeError] = useState('');

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsNext(true);
        setLoadingSigIn(true);
        setTypeError('');
    };

    // Buscar o tipo correto da const "Authentication"
    //Porque está entrando duas vezes na função?
    const createUser = async (Authentication: Auth, email: string, pass: string) => {
        try {
            await createUserWithEmailAndPassword(Authentication, email, pass);
            setLoadingSigIn(false);
            history.push('/login');
        } catch (error: any) {
            const err = await errorLogin(error?.code);
            setLoadingSigIn(false);
            setTypeError(err);
            setIsNext(false);
        }
    };

    // const sendEmailVerify = () => {
    //     let actionCodeSettings = {
    //         url: 'http://localhost:3000/?email=' + Authentication.currentUser?.email,
    //     };
    //     Authentication.
    //     // sendEmailVerification(actionCodeSettings)
    // };

    if (isNext) createUser(Authentication, email, pass);

    return { email, pass, setEmail, setPass, submit, loadingSigIn, typeError };
};

export { useCreateUser };
