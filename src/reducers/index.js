const initState = []

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'STARSHIPS_LOADED': 
            return {
                starships: action.payload
            };
        default: 
            return state;
    }
    
};
export default reducer;