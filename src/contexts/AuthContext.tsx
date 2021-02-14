import * as React from "react";
import { IAuth } from "../types/IAuth";
import { createContext, FC, useEffect, useReducer } from "react";
import {
  AuthAction,
  AuthActionTypes,
  authReducer,
} from "../reducers/authReducer";
import jwtDecode from "jwt-decode";
import { getLocalStorageValue } from "../ultilities";

interface AuthContextProps {
  state: IAuth;
  dispatch: React.Dispatch<AuthAction>;
}

interface JWTPayload {
  id: string;
  email: string;
  exp: number;
}

const isValidToken = (token: string): boolean => {
  try {
    const decoded_jwt: JWTPayload = jwtDecode(token);
    const current_time = Date.now().valueOf() / 1000;
    return decoded_jwt.exp > current_time;
  } catch (error) {
    return false;
  }
};
export const initialAuth = {
  email: null,
  token: null,
};
export const AuthContext = createContext<AuthContextProps>({
  state: initialAuth,
  dispatch: () => {},
});

export const AuthProvider: FC = ({ children }) => {
  const auth = getLocalStorageValue("auth");
  const [state, dispatch] = useReducer(authReducer, initialAuth);

  useEffect(() => {
    if (!auth?.token) return;
    if (isValidToken(auth.token)) {
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: auth,
      });
    } else {
      dispatch({
        type: AuthActionTypes.LOGOUT,
        payload: initialAuth,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return React.useContext(AuthContext);
}
