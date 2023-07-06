import { createContext } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
