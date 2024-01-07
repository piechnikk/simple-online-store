import { useContext } from "react";
import { AuthContext } from "@/features/auth/providers";

const useAuth = () => useContext(AuthContext);

export default useAuth;
