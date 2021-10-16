import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../../services/firebase';

const useCreateUser = () => {
    const history = useHistory(),
        [email, setEmail] = useState(''),
        [pass, setPass] = useState(''),
        [isNext, setIsNext] = useState(false);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsNext(true);
    };

    // Buscar o tipo correto da const "auth"
    //Porque está entrando duas vezes na função?
    const createUser = async (auth: any, email: string, pass: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            history.push('/login');
        } catch (error) {
            console.log(error);
            setIsNext(false);
        }
    };

    if (email && pass && isNext) createUser(auth, email, pass);

    return { email, pass, setEmail, setPass, submit };
};

export { useCreateUser };
