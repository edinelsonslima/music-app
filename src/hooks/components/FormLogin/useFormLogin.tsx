import { FormEvent, MouseEventHandler, useMemo, useState } from 'react';

export interface FormLoginProps {
    email: string;
    pass: string;
    styleError?: object;
    typeError?: string;
    loadIn?: boolean;
    setEmail: (arg0: string) => void;
    setPass: (arg0: string) => void;
    submit: (arg0: FormEvent<HTMLFormElement>) => void;
    singInGoogle?: MouseEventHandler<HTMLDivElement>;
    singInFacebook?: MouseEventHandler<HTMLDivElement>;
    singInGithub?: MouseEventHandler<HTMLDivElement>;
    create?: boolean;
}

const useFormLogin = (props: FormLoginProps) => {
    const {
            email,
            pass,
            setEmail,
            setPass,
            submit,
            create,
            loadIn,
            singInFacebook,
            singInGithub,
            singInGoogle,
            styleError,
            typeError,
        } = props,
        [styleCreate, setStyleCreate] = useState({});
    useMemo(() => {
        if (props.create) setStyleCreate({ display: 'none' });
    }, [props.create]);
    
    return {
        styleCreate,
        email,
        pass,
        setEmail,
        setPass,
        submit,
        create,
        loadIn,
        singInFacebook,
        singInGithub,
        singInGoogle,
        styleError,
        typeError,
    };
};

export { useFormLogin };
