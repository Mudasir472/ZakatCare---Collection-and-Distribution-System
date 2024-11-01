import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import URL from "../../../env"
const initialState = {
    user: null,
    status: null,
    error: null
};

export const UserFetch = createAsyncThunk(
    "client/UserFetch",
    async () => {
        const response = await axios.get(`${URL}/zakatcare/profile`);
        return response.data;
    }
);

const UserSlice = createSlice({
    name: "client",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(UserFetch.pending, (state) => {
                state.status = "pending";
            })
            .addCase(UserFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload;
            })
            .addCase(UserFetch.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default UserSlice.reducer;