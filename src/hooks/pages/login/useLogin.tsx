import React, { useState } from 'react';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { useHistory } from 'react-router-dom';
import { errorLogin } from '../../functions';

const useLogin = () => {
    const [email, setEmail] = useState(''),
        [pass, setPass] = useState(''),
        [typeError, setTypeError] = useState(''),
        [styleError, setStyleError] = useState({}),
        [loadingSigIn, setLoadingSigIn] = useState(false),
        history = useHistory(),
        googleProvider = new GoogleAuthProvider(),
        facebookProvider = new FacebookAuthProvider(),
        githubProvider = new GithubAuthProvider();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        singInEmailPass(auth, email, pass);
        setLoadingSigIn(true);
        setTypeError('');
        setStyleError({});
    };

    const singInEmailPass = async (auth: any, email: string, pass: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);

            history.push('/home');
            setLoadingSigIn(false);
        } catch (error: any) {
            const err = await errorLogin(error.code);
            setTypeError(err)
            setStyleError({
                borderBottomColor: 'var(--colorError)',
            });
            setLoadingSigIn(false);
        }
    };

    const singInGoogle = async () => {
        try {
            setLoadingSigIn(true);
            setTypeError('');
            setStyleError({});
            const result = await signInWithPopup(auth, googleProvider);
            GoogleAuthProvider.credentialFromResult(result);

            history.push('/home');
            setLoadingSigIn(false);
        } catch (error: any) {
            GoogleAuthProvider.credentialFromError(error);
            const err = await errorLogin(error.code);
            setTypeError(err);
            setStyleError({
                borderBottomColor: 'var(--colorError)',
            });
            setLoadingSigIn(false);
        }
    };

    const singInFacebook = async () => {
        try {
            setLoadingSigIn(true);
            setTypeError('');
            setStyleError({});

            const result = await signInWithPopup(auth, facebookProvider);
            FacebookAuthProvider.credentialFromResult(result);
            history.push('/home');
            setLoadingSigIn(false);
        } catch (error: any) {
            FacebookAuthProvider.credentialFromError(error);
            const err = await errorLogin(error.code);
            setTypeError(err);
            setStyleError({
                borderBottomColor: 'var(--colorError)',
            });
            setLoadingSigIn(false);
        }
    };

    const singInGithub = async () => {
        try {
            setLoadingSigIn(true);
            setTypeError('');
            setStyleError({});

            const result = await signInWithPopup(auth, githubProvider);
            GithubAuthProvider.credentialFromResult(result);

            history.push('/home');
            setLoadingSigIn(false);
        } catch (error: any) {
            GithubAuthProvider.credentialFromError(error);
            const err = await errorLogin(error.code);
            setTypeError(err);
            setStyleError({
                borderBottomColor: 'var(--colorError)',
            });
            setLoadingSigIn(false);
        }
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
        loadingSigIn,
        typeError,
    };
};

export { useLogin };
