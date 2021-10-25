import { FromLogin } from '../../components/FormLogin';
import { useCreateUser } from '../../hooks/pages/createUser/useCreateUser';

const CreateUser = () => {
    const { email, pass, submit, setEmail, setPass, typeError, loadingSigIn } =
        useCreateUser();
    return (
        <FromLogin
            create
            email={email}
            pass={pass}
            setEmail={setEmail}
            setPass={setPass}
            submit={submit}
            typeError={typeError}
            loadingSigIn={loadingSigIn}
        />
    );
};
export { CreateUser };