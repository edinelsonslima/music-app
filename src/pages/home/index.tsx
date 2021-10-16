import { useHome } from '../../hooks/pages/home/useHome';

const Home = () => {
    const { signOutAccount, displayName } = useHome();

    return (
        <main>
            <h1>Home page</h1>
            <h1>{displayName}</h1>
            <button onClick={signOutAccount}>SingOut</button>
        </main>
    );
};

export { Home };
