export default function board(state = {}, action) {
  switch (action.type) {
    case 'GET_BOARD':
      return action.payload;
    default:
      return state;
  }
}
