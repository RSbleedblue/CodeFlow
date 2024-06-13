import { createSlice } from "@reduxjs/toolkit";

const getSessionStorage = () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    return isLoggedIn !== null ? isLoggedIn === "true" : false;
};

const LoginSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: getSessionStorage(),
        loginSelected: true,
    },
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true;
            sessionStorage.setItem("isLoggedIn", true);
        },
        logoutSuccess: (state) => {
            state.isLoggedIn = false;
            sessionStorage.setItem("isLoggedIn", false);
        },
        loginSelected: (state,action) => {
            state.loginSelected = action.payload;
        },
        signUpSelected: (state) => {
            state.signUpSelected = !state.signUpSelected;
        }
    },
});

export const { loginSuccess, logoutSuccess, loginSelected, signUpSelected } = LoginSlice.actions;
export default LoginSlice.reducer;
