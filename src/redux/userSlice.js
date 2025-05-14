import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  access_token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.access_token = action.payload.token;
    },
    logOut(state) {
      state.user = null;
      state.access_token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
