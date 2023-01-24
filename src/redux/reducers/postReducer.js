import { ActionTypes } from "../constants/action-types";


const initialState = {
    posts: [{
        author: 'Luke',
        heading: 'Poste Heading is this.',
        picture: 'url to picture',
        likes_counter: 63,
        time_posted: 'Callback to get time function',
        comments: 'This is question?' 
    },
],
};

//TODO => Note that action is always destructured to {type, payload}, see postActions.js

export const postsReducer = (state=initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECT_POSTS:
            return state;

        default:
            return state;
    }

}