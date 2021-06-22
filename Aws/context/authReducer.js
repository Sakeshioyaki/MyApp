// authReducer.js
function authReducer(state, action) {
  switch (action.type) {
    case "login":
      const { authResult, user } = action;
      const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      localStorage.setItem("expires_at", JSON.stringify(expiresAt));
      localStorage.setItem("user", JSON.stringify(user));
      return { user, expiresAt };
    case "logout":
      localStorage.removeItem("expires_at");
      localStorage.removeItem("user");
      return { user: {}, expiresAt: null };
    default:
      return state;
  }
}

//luu du lieu vao localstorage ??