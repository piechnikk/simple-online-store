import { createContext, useCallback, useState } from "react";
import { signIn, register, logout } from "@/features/auth/api";

const authStorageKey = "AUTH";

const userFromStorage = JSON.parse(
  window.localStorage.getItem(authStorageKey) ?? "null"
);

export const AuthContext = createContext(userFromStorage);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userFromStorage);

  const _signIn = useCallback(async (body) => {
    const { role } = await signIn(body);
    window.localStorage.setItem(authStorageKey, JSON.stringify({ role }));
    setUser({ role });
  }, []);

  const _register = useCallback((body) => register(body), []);

  const _logout = useCallback(async (body) => {
    await logout(body);
    window.localStorage.removeItem(authStorageKey);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn: _signIn, register: _register, logout: _logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
