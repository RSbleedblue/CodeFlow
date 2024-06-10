import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice ({
    name: 'user',
    initialState: {
        selectedOption : "",
    },
    reducers:{
        changeOption : (state,action) => {
            state.selectedOption = action.payload;
        }
    }
})
export const {changeOption} = UserSlice.actions;
export default UserSlice.reducer;