// import * as actionTypes from './actions';

// const initialState = {
//     counter: 0,
//     results: [],
//     someVar: {
//         innerVar: 1
//     }

// };

// const reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case actionTypes.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case actionTypes.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case actionTypes.ADD:
//             return {
//                 ...state,
//                 counter: state.counter + 5
//             }
//         case actionTypes.SUBTRACT:
//             return {
//                 ...state,
//                 counter: state.counter - 5
//             }
//         case actionTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.concat({ id: new Date(), value: state.counter })
//             }
//         case actionTypes.DELETE_RESULT:
//             // const id = 2;
//             // const newArray = [...state.results];
//             // newArray.splice(id,1)
//             const newArray = state.results.filter(result => result.id !== action.resultElementId)
//             return {
//                 ...state,
//                 results: newArray
//             }
//     }

//     return state;
// }

// export default reducer;