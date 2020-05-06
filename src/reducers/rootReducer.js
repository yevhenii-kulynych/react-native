const initialState = [];

export const rootReducer = (state = initialState, action) => {
    if (action.type === 'FETCH_DATA') {
        console.log(action.payload, 'PAYLOAD')
        return state.concat(action.payload)
      }
    return state;
};
