import authReducer from "authReducer";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  // khởi tạo
  const [state, dispatch] = useReducer(authReducer, {});
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};