// authReducer.js
function authReducer(state, action) {
  switch (action.type) {
    case "login":
      const { authResult, user } = action;
      localStorage.setItem("user", JSON.stringify(user));
      return { user };
    case "logout":
      localStorage.removeItem("user");
      return { user: {}};
    default:
      return state;
  }
}