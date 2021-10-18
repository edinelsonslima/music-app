import { BrowserRouter, Switch } from 'react-router-dom';

import { Login } from '../pages/login';
import { CreateUser } from '../pages/createUser';
import { CustomRouter } from '../components/CustomRouter';
import { Home } from '../pages/home';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRouter path={'/login'} component={Login} />

                <CustomRouter
                    path={'/create-user'}
                    component={CreateUser}
                    exact
                />

                <CustomRouter 
                    // isPrivate 
                    path={'/home'} 
                    component={Home} exact />

                <CustomRouter path={'*'} component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export { Router };
