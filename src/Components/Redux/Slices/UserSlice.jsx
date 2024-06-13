import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice ({
    name: 'user',
    initialState: {
        selectedOption : "",
        email: "",
        projects:[],
        searchProjects:"",
    },
    reducers:{
        changeOption : (state,action) => {
            state.selectedOption = action.payload;
        },
        changeEmail : (state,action) => {
            sessionStorage.setItem("email",action.payload);
            state.email = sessionStorage.getItem("email");
        },
        loadProjects : (state,action) => {
            state.projects = action.payload;
        },
        setSearchProjects : (state,action) => {
            state.searchProjects = action.payload;
        }
    }
})
export const {changeOption,changeEmail,loadProjects,setSearchProjects} = UserSlice.actions;
export default UserSlice.reducer;