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
            state.email = action.payload;
        }
    }
})
export const {changeOption,changeEmail} = UserSlice.actions;
export default UserSlice.reducer;