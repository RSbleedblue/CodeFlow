import {configureStore} from '@reduxjs/toolkit';
import LoginSlice from './Slices/LoginSlice';
const store = configureStore({
    reducer : {
        auth : LoginSlice,
        
    },
});
export default store;
