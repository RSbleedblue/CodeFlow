import {configureStore} from '@reduxjs/toolkit';
import LoginSlice from './Slices/LoginSlice';
import UserSlice from './Slices/UserSlice';
const store = configureStore({
    reducer : {
        auth : LoginSlice,
        user : UserSlice
    },
});
export default store;
