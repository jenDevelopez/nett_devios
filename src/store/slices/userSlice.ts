import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userId: string;
  fullName: string;
  isLogedIn: boolean;
}

const initialState: UserState = {
  userId: "",
  fullName: "",
  isLogedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ userId: string; fullName: string }>) {
      state.userId = action.payload.userId;
      state.fullName = action.payload.fullName;
    },
    setIsLogedIn(state, action: PayloadAction<boolean>) {
      state.isLogedIn = action.payload;
    },
    logout(state) {
      state.userId = "";
      state.fullName = "";
      state.isLogedIn = false;
    },
  },
});

export const { setUser, setIsLogedIn, logout } = userSlice.actions;
export default userSlice.reducer;
