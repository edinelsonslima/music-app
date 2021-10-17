import {
    FormLoginProps,
    useFormLogin,
} from '../../hooks/components/FormLogin/useFormLogin';
import { Link } from 'react-router-dom';

// Components
import { Loading } from '../loading';

//Assets
import facebookImg from '../../assets/facebook.png';
import googleImg from '../../assets/google.png';
import githubImg from '../../assets/github.png';

import './index.css';

const FromLogin = (props: FormLoginProps) => {
    const {
        styleCreate,
        create,
        email,
        loadIn,
        pass,
        setEmail,
        setPass,
        singInFacebook,
        singInGithub,
        singInGoogle,
        styleError,
        submit,
        typeError,
    } = useFormLogin(props);

    return (
        <section className='login-container'>
            <div className='login-filter-blur'></div>
            <div className='login-content'>
                <h1 className='login-title'>
                    {create ? 'Create Account' : 'Music App'}
                </h1>
                {/* Login with Email and Password */}
                <form
                    className='login-form'
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        submit(e)
                    }
                >
                    <input
                        style={styleError}
                        type='email'
                        className='login-email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />

                    <input
                        style={styleError}
                        type='password'
                        className='login-pass'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
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

                    {typeError&& <span>{typeError}</span>}
                    
                    <div
                        className='login-buttons'
                        style={
                            !create
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
                            style={!create ? { display: 'none' } : {}}
                        >
                            Voltar
                        </Link>
                        <button type='submit' className='login-button'>
                            {loadIn ? (
                                <Loading />
                            ) : create ? (
                                'Cadastrar'
                            ) : (
                                'Entrar'
                            )}
                        </button>
                    </div>
                </form>

                {/* Login with social medias */}
                <span className='login-social-or' style={styleCreate}>
                    or
                </span>
                <div className='login-social' style={styleCreate}>
                    <div className='login-icon-social' onClick={singInGoogle}>
                        <img src={googleImg} alt='google icon' />
                    </div>
                    <div className='login-icon-social' onClick={singInFacebook}>
                        <img src={facebookImg} alt='facebook icon' />
                    </div>
                    <div className='login-icon-social' onClick={singInGithub}>
                        <img src={githubImg} alt='github icon' />
                    </div>
                </div>
            </div>
        </section>
    );
};
export { FromLogin };
