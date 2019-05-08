import * as actionTypes from "../actions/actions";

const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_DATA:
      return {
        data: [...action.data]
      };
    case actionTypes.EDIT_SERVICE:
      const newData = state.data.map(el => {
        if (el.id === action.data.id) {
          return { ...el, ...action.data };
        }
        return el;
      });
      return { data: newData };
  }
  return state;
};

export default reducer;
