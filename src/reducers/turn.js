export default function turn(state = '', action) {
  switch (action.type) {
    case 'GET_TURN':
      return action.payload;
    default:
      return state;
  }
}
