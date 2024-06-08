import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        loginSelected : false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        loginSelected: (state)=>{
            state.loginSelected = !state.loginSelected;
        }
    },
});

export const { loginSuccess, loginSelected } = LoginSlice.actions;
export default LoginSlice.reducer;
