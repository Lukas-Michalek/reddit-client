import { ActionTypes } from "../constants/action-types"

export const selectPosts = (allPosts) => {
    return {
        type: ActionTypes.SELECT_POSTS,
        payload: allPosts,
    };
};

export const selectedPost = (post) => {
    return {
        type: ActionTypes.SELECTED_POST,
        payload:post,
    };
};

