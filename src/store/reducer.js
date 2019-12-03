const initialState = {
    counter: 0,
    results: [],

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_5':
            return {
                ...state,
                counter: state.counter + 5
            }
        case 'SUBTRACT_5':
            return {
                ...state,
                counter: state.counter - 5
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
    }

    return state;
}

export default reducer;