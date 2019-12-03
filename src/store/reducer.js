const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === "ADD_5") {
        console.log('add5')

        return {
            counter: state.counter + action.value
        }
    }
    if (action.type === "SUBTRACT_5") {
        console.log('sub5')
        return {
            counter: state.counter - action.value
        }
    }

    return state;
}

export default reducer;