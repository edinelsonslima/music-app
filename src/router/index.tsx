import { BrowserRouter, Switch, useLocation } from "react-router-dom";
import { StopProvider } from "../hooks/context/useStop";

import { Login } from "../pages/login";
import { CreateUser } from "../pages/createUser";
import { CustomRouter } from "../components/CustomRouter";
import { Home } from "../pages/home";
import { useEffect } from "react";
import { setCurrentScreen, Analytics } from "../services/firebase";

const RouterListener = () => {
  const location = useLocation();
  useEffect(() => {
    setCurrentScreen(Analytics, location.pathname);
  }, [location]);

  return <></>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <StopProvider>
        <>
          <RouterListener />
          <Switch>
            <CustomRouter path={"/login"} component={Login} />

            <CustomRouter path={"/create-user"} component={CreateUser} exact />

            <CustomRouter isPrivate path={"/home"} component={Home} exact />

            <CustomRouter path={"*"} component={Login} />
          </Switch>
        </>
      </StopProvider>
    </BrowserRouter>
  );
};

export { Router };
