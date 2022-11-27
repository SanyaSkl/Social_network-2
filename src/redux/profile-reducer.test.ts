import profileReducer, {actions} from "./profile-reducer";



let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Hello', likesCount: 17},
        {id: 4, message: 'Welcome to programming', likesCount: 35}
    ],
    profile: null,
    status: "",
    newPostText: ""
};

it('length of posts should be incremented', () => {
    let action = actions.addPostActionCreator("it-kamasutra")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
});

it('message of new post should be correct', () => {
    let action = actions.addPostActionCreator("it-kamasutra")
    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe("it-kamasutra")
});

it('after deleting length of messages should be decrement', () => {

    let action = actions.deletePost (1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    let action = actions.deletePost (1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
});
