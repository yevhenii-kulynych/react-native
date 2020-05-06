

export const link = (state = '', action) => {
    if (action.type === 'GET_URL') {
        return action.payload;
      }
    return state;
};