import React, { useState } from 'react';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    AuthErrorCodes,
} from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { useHistory } from 'react-router-dom';

const useLogin = () => {
    const [email, setEmail] = useState(''),
        [pass, setPass] = useState(''),
        [typeError, setTypeError] = useState(''),
        [styleError, setStyleError] = useState({}),
        [loadIn, setLoadIn] = useState(false),
        history = useHistory(),
        googleProvider = new GoogleAuthProvider(),
        facebookProvider = new FacebookAuthProvider(),
        githubProvider = new GithubAuthProvider();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        singInEmailPass(auth, email, pass);
        setLoadIn(true);
        setTypeError('');
    };

    const singInEmailPass = async (auth: any, email: string, pass: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);

            history.push('/home');
            setLoadIn(false);
        } catch (error: any) {
            errorLogin(error.code);

            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const singInGoogle = async () => {
        try {
            setLoadIn(true);
            setTypeError('');

            const result = await signInWithPopup(auth, googleProvider);
            GoogleAuthProvider.credentialFromResult(result);

            history.push('/home');
            setLoadIn(false);
        } catch (error: any) {
            GoogleAuthProvider.credentialFromError(error);
            errorLogin(error.code);
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const singInFacebook = async () => {
        try {
            setLoadIn(true);
            setTypeError('');

            const result = await signInWithPopup(auth, facebookProvider);
            FacebookAuthProvider.credentialFromResult(result);
            history.push('/home');
            setLoadIn(false);
        } catch (error: any) {
            FacebookAuthProvider.credentialFromError(error);
            errorLogin(error.code);
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const singInGithub = async () => {
        try {
            setLoadIn(true);
            setTypeError('');

            const result = await signInWithPopup(auth, githubProvider);
            GithubAuthProvider.credentialFromResult(result);

            history.push('/home');
            setLoadIn(false);
        } catch (error: any) {
            GithubAuthProvider.credentialFromError(error);
            errorLogin(error.code);
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const errorLogin = (error: string) => {
        Object.values(AuthErrorCodes).map((value) => {
            if (value === error) {
                const offAuthString = value.replace('auth/', '');
                const typeError = offAuthString.replaceAll('-', ' ');
                setTypeError(typeError);
            }
            return '';
        });
    };

    return {
        email,
        setEmail,
        pass,
        setPass,
        submit,
        singInGoogle,
        singInGithub,
        singInFacebook,
        styleError,
        loadIn,
        typeError,
    };
};

export { useLogin };
