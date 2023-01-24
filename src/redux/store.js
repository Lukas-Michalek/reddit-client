import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './reducers/postReducer'

const store = configureStore({
    reducer: {
        allPosts: postsReducer
    }
});

export default store;