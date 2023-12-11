import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
    value: AuthState
}
type AuthState = {
    isAuth: boolean;
    email: string;
    id: string;
    isModerator: boolean;
}

const initialState = {
    value: {
        isAuth: false,
        email: "",
        id: "",
        isModerator: false
    }
} as InitialState;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        
    }
})