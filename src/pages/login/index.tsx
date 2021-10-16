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
        />
    );
};

export { Login };
