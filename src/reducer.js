export const initialState = {
    user: null,
    playlists: [],
    // spotify: null,
    discover_weekly: null,
    // top_artists: null,
    playing: false,
    item: null,
    token: null
    // token: "BQAn0t0w6JFfEmojJ47PwzrvNdHlHTJYSGSO1ezvItINbFNpSX_2zVEIq5VVqrq2wBYSGJdmyvH6AY8pwo6IeKHKHDp3lUc9VB554g2c_8kT8weOGLrKVW2oY9H7qVMkQB9lTRD83BWAFOWtyLrw0fL-3B0OaVT-gNqpF0ntJdG9Wyqp"
}


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        // case "SET_TOP_ARTISTS":
        //     return {
        //         ...state,
        //         top_artists: action.top_artists,
        //     };
        // case "SET_SPOTIFY":
        //     return {
        //         ...state,
        //         spotify: action.spotify,
        //     };
        default:
            return state;
    }
}

export default reducer;