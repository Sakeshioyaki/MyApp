// useAuth.js
import { AuthProvider } from "AuthProvider";

export const useAuth = () => {
    const { state, dispatch } = userContext(AuthContext);
    const login = () => {
        // làm gì đó ở đây
    }
    const logout = () => {
        // làm gì đó ở đây
        dispatch({ type: "logout" })
    }
    // ...  còn một số thức khác
    const isAuthenticated = () => {
        return state.expiresAt && new Date().getTime() < state.expiresAt;
    };
    // ...  còn một số thức khác
    return {
        isAuthenticated,
        user: state.user,
        userId: state.user ? state.user : null,
        login,
        logout,
        handleAuthentication
    }
}