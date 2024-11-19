import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts', // Naziv akcije
    async () => {
        return fetch(
            'https://jsonplaceholder.typicode.com/posts'
        ).then((response) => response.json())
    }
) 

const postSlice = createSlice({
    name: 'posts', // Ime slice-a (deo stanja)
    initialState: {
        list: [], // Pocetno stanje
        status: null, // Status API poziva (loading, success, failed)
    },
    extraReducers: (builder) => { // Koristimo builder callback notaciju
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading'; // Kada je poziv u toku
            })
            .addCase(getPosts.fulfilled, (state, { payload }) => {
                state.list = payload; // Kada poziv uspe, azuriraj listu
                state.status = 'success'; // Postavi status na uspesno
            })
            .addCase(getPosts.rejected, (state) => {
                state.status = 'failed'; // Kada poziv ne uspe
            });
    },
});

export default postSlice.reducer