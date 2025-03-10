import { createSlice } from "@reduxjs/toolkit";
import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { AppDispatch } from "../store";
import { setUser, setIsLogedIn } from "./userSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export const createUserWithPassword =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

export const signInWithPassword =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setIsLogedIn(true));
    } catch (error) {
      console.error(error);
    }
  };

export const authGoogle = () => async (dispatch: AppDispatch) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(setUser({ userId: result.user.uid, fullName: result.user.displayName || "" }));
    dispatch(setIsLogedIn(true));
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(setIsLogedIn(false));
  } catch (error) {
    console.error(error);
  }
};

export const checkAuthState = () => (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      dispatch(setUser({ userId: userData.uid, fullName: userData.displayName || "" }));
      dispatch(setIsLogedIn(true));
    }
  });
};

export default authSlice.reducer;
