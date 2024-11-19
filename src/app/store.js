import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../posts/postsSlice'

export default configureStore({
    reducer: {
        posts: postsReducer // Povezujemo posts deo stanja sa postsReducer-om
    },
})