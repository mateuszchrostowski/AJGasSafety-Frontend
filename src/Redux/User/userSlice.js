import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,    
    userType: 'none'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true            
            state.userType = action.payload
        },
        logOut: (state) => {
            state.isLoggedIn = false
            state.userType = 'none'
        }
    }
});

//console.log(userSlice);

export const {logIn, logOut} = userSlice.actions;

export default userSlice.reducer;