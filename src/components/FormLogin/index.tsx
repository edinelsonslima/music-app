import facebookImg from '../../assets/facebook.png';
import googleImg from '../../assets/google.png';
import githubImg from '../../assets/github.png';
import { Link } from 'react-router-dom';
import { FormEvent, MouseEventHandler, useMemo, useState } from 'react';
import './index.css';
import { Loading } from '../loading';

interface FormLoginProps {
    email: string;
    pass: string;
    styleError?: object;
    loadIn?: boolean;
    setEmail: (arg0: string) => void;
    setPass: (arg0: string) => void;
    submit: (arg0: FormEvent<HTMLFormElement>) => void;
    singInGoogle?: MouseEventHandler<HTMLDivElement>;
    singInFacebook?: MouseEventHandler<HTMLDivElement>;
    singInGithub?: MouseEventHandler<HTMLDivElement>;
    create?: boolean;
}

const FromLogin = (props: FormLoginProps) => {
    const [styleCreate, setStyleCreate] = useState({});
    useMemo(() => {
        if (props.create) setStyleCreate({ display: 'none' });
    }, [props.create]);

    return (
        <section className='login-container'>
            <div className='login-filter-blur'></div>
            <div className='login-content'>
                <h1 className='login-title'>
                    {props.create ? 'Create Account' : 'Music App'}
                </h1>
                <form
                    className='login-form'
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        props.submit(e)
                    }
                >
                    <input
                        style={props.styleError}
                        type='email'
                        className='login-email'
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />

                    <input
                        style={props.styleError}
                        type='password'
                        className='login-pass'
                        value={props.pass}
                        onChange={(e) => props.setPass(e.target.value)}
                        placeholder='Password'
                        required
                    />

                    <div className='login-links' style={styleCreate}>
                        <Link
                            className='login-create-account'
                            to={'/create-user'}
                        >
                            create account
                        </Link>
                        <Link
                            className='login-create-account'
                            to={'/create-user'}
                        >
                            Forgot your password?
                        </Link>
                    </div>
                    <div
                        className='login-buttons'
                        style={
                            !props.create
                                ? {
                                      justifyContent: 'center',
                                      marginTop: '20px',
                                  }
                                : {}
                        }
                    >
                        <Link
                            className='login-button'
                            to='/login'
                            style={!props.create ? { display: 'none' } : {}}
                        >
                            Voltar
                        </Link>
                        <button type='submit' className='login-button'>
                            { props.loadIn? <Loading/> :props.create ? 'Cadastrar' : 'Entrar'}
                        </button>
                    </div>
                </form>
                <span className='login-social-or' style={styleCreate}>
                    or
                </span>
                <div className='login-social' style={styleCreate}>
                    <div
                        className='login-icon-social'
                        onClick={props.singInGoogle}
                    >
                        <img src={googleImg} alt='google icon' />
                    </div>
                    <div
                        className='login-icon-social'
                        onClick={props.singInFacebook}
                    >
                        <img src={facebookImg} alt='facebook icon' />
                    </div>
                    <div
                        className='login-icon-social'
                        onClick={props.singInGithub}
                    >
                        <img src={githubImg} alt='github icon' />
                    </div>
                </div>
                <section className='login-app'></section>
            </div>
        </section>
    );
};
export { FromLogin };
