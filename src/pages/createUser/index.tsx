import { FromLogin } from '../../components/FormLogin';
import { useCreateUser } from '../../hooks/pages/createUser/useCreateUser';

const CreateUser = () => {
    const { email, pass, submit, setEmail, setPass } = useCreateUser();
    return (
        <FromLogin
            create
            email={email}
            pass={pass}
            setEmail={setEmail}
            setPass={setPass}
            submit={submit}
        />
    );
};
export { CreateUser };
