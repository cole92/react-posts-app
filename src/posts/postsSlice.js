import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [], 
        status: null,
    },
    extraReducers: {

    },
});

export default postSlice.reducer