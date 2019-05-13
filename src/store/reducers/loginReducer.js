import * as actionTypes from "../actions/actions";

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_USER:
      return {
        data: action.data
      };
  }
  return state;
};

export default reducer;
