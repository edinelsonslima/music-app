import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/pages/login/useLogin';
import facebookImg from '../../assets/facebook.png';
import googleImg from '../../assets/google.png';
import githubImg from '../../assets/github.png';

import './index.css';
const Login = () => {
    const {
        email,
        pass,
        setEmail,
        setPass,
        submit,
        singInFacebook,
        singInGithub,
        singInGoogle,
    } = useLogin();

    return (
        <section className='login-container'>
            <div className='login-filter-blur'></div>
            <div className='login-content'>
                <h1 className='login-title'>Music App</h1>
                <form
                    className='login-form'
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        submit(e)
                    }
                >
                    <input
                        type='email'
                        className='login-email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />

                    <input
                        type='password'
                        className='login-pass'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder='Password'
                        required
                    />

                    <div className='login-links'>
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
                    <input type='submit' value='Entrar' />
                </form>
                <span className='login-social-or'>or</span>
                <div className='login-social'>
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
                <section className='login-app'></section>
            </div>
        </section>
    );
};

export { Login };
