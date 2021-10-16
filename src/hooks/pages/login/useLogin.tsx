import React, { useState } from 'react';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    FacebookAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { useHistory } from 'react-router-dom';

const useLogin = () => {
    const [email, setEmail] = useState(''),
        [pass, setPass] = useState(''),
        history = useHistory(),
        googleProvider = new GoogleAuthProvider(),
        facebookProvider = new FacebookAuthProvider(),
        githubProvider = new GithubAuthProvider();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        singInEmailPass(auth, email, pass);
    };

    const singInEmailPass = async (auth: any, email: string, pass: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, pass);
            history.push('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const singInGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            history.push('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const singInFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            history.push('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const singInGithub = async () => {
        try {
            await signInWithPopup(auth, githubProvider);
            history.push('/home');
        } catch (error) {
            console.log(error);
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
    };
};

export { useLogin };
