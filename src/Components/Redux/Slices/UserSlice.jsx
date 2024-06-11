import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice ({
    name: 'user',
    initialState: {
        selectedOption : "",
        email: "",
    },
    reducers:{
        changeOption : (state,action) => {
            state.selectedOption = action.payload;
        },
        changeEmail : (state,action) => {
            sessionStorage.setItem("email",action.payload);
            state.email = sessionStorage.getItem("email");
        }
    }
})
export const {changeOption,changeEmail} = UserSlice.actions;
export default UserSlice.reducer;