import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_REGISTRATION_URL, USER_LOGIN_URL } from "../Urls";

export const registerUser = createAsyncThunk("REGISTER_USER", async (data) => {
    try {
        const response = await axios.post(USER_REGISTRATION_URL, data);
        console.log(response.data)
        return response.data;
    } catch (err) {
        console.error(err);
    }
});

export const loginUser = createAsyncThunk("LOGIN_USER", async (data) => {
    try {
        const response = await axios.post(USER_LOGIN_URL, data);
        return response.data;
    } catch (err) {
        console.error(err);
    }
});

export const clearRegistrationStatus = createAsyncThunk("CLEAR_REGISTRATION_RESPONSE");
export const clearLoginStatus = createAsyncThunk("CLEAR_LOGIN_RESPONSE");

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        isRegisterLoding: undefined,
        isLoginLoading: undefined,
        registrationStatus: undefined,
        loginStatus: undefined,
        profile: undefined,
        isError: undefined,
        errorMessage: ""
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            console.log("Inside Pending")
            state.isRegisterLoding = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log("Inside FullFilled",action.payload)
            state.isRegisterLoding = false;
            state.registrationStatus = true;
            state.profile = action.payload?.profile
            state.errorMessage = action.payload?.error
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            console.log("Inside Rejected")
            state.isRegisterLoding = false;
            state.registrationStatus = false;
            state.isError = true;
            state.errorMessage = action.payload?.response.data;
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoginLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoginLoading = false;
            state.loginStatus = true;
            state.profile = action.payload?.profile
            state.errorMessage = action.payload?.error
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoginLoading = false;
            state.loginStatus = false;
            state.errorMessage = action.payload?.response.data;
            state.isError = true;
        });
        builder.addCase(clearRegistrationStatus.pending, (state, action) => {
            state.registrationStatus = undefined;
        });
        builder.addCase(clearLoginStatus.pending, (state, action) => {
            state.loginStatus = undefined;
        });
    },
});

export default userSlice.reducer;
