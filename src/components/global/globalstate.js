import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const globalState = createSlice({
  initialState,
  name: "authstate",
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },

    signInUser: (state, { payload }) => {
      state.user = payload;
    },

    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, signInUser, signOut } = globalState.actions;

export default globalState.reducer;
