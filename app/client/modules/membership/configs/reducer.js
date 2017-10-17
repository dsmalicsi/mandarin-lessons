const initialState = {
  test: "Test State"
};

export function membershipState(state, action){
  if(typeof state == "undefined"){
    return initialState;
  }

  switch(action.type){
    case 'TEST_STATE':
      return Object.assign({}, state, {test: action.test});
    default:
      return state;
  }

}