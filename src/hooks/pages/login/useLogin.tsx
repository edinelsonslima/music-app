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

const useLogin = () => {
    const [email, setEmail] = useState(''),
        [pass, setPass] = useState(''),
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
    };

    const singInEmailPass = async (auth: any, email: string, pass: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
            history.push('/home');
            setLoadIn(false);
        } catch (error) {
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const singInGoogle = async () => {
        try {
            setLoadIn(true);
            await signInWithPopup(auth, googleProvider);
            history.push('/home');
            setLoadIn(false);
        } catch (error) {
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const singInFacebook = async () => {
        try {
            setLoadIn(true);
            await signInWithPopup(auth, facebookProvider);
            history.push('/home');
            setLoadIn(false);
        } catch (error) {
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
        }
    };

    const singInGithub = async () => {
        try {
            setLoadIn(true);
            await signInWithPopup(auth, githubProvider);
            history.push('/home');
            setLoadIn(false);
        } catch (error: any) {
            setStyleError({
                borderBottomColor: 'red',
            });
            setLoadIn(false);
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
        loadIn,
    };
};

export { useLogin };
