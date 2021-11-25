import { Route, Redirect, RouteProps } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { Authentication } from "../../services/firebase";
import { useState } from "react";

interface CustomRouterProps extends RouteProps {
  isPrivate?: boolean;
}

const CustomRouter = (props: CustomRouterProps) => {
  const [isAuth, setIsAuth] = useState("");

  onAuthStateChanged(Authentication, (user) => {
    if (!user) return;
    setIsAuth(user.uid);
  });

  if (props.isPrivate && !isAuth) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export { CustomRouter };
