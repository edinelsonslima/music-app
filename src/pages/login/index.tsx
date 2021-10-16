import { FromLogin } from '../../components/FormLogin';
import { useLogin } from '../../hooks/pages/login/useLogin';

const Login = () => {
    const {
        email,
        pass,
        setEmail,
        setPass,
        singInFacebook,
        singInGithub,
        singInGoogle,
        submit,
        styleError,
        loadIn,
    } = useLogin();

    return (
        <FromLogin
            email={email}
            pass={pass}
            setEmail={setEmail}
            setPass={setPass}
            singInFacebook={singInFacebook}
            singInGithub={singInGithub}
            singInGoogle={singInGoogle}
            submit={submit}
            styleError={styleError}
            loadIn={loadIn}
        />
    );
};

export { Login };
