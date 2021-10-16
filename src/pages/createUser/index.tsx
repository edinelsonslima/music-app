import { useCreateUser } from '../../hooks/pages/createUser/useCreateUser';

const CreateUser = () => {
    const { email, pass, submit, setEmail, setPass } = useCreateUser();
    return (
        <>
            <h1>New User</h1>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submit(e)}>
                <input
                    type='text'
                    className='login-email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input
                    type='password'
                    className='login-pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder='Password'
                />
                <input type='submit' value='Entrar' />
            </form>
        </>
    );
};
export { CreateUser };
