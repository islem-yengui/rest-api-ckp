const { GETUSERS } = require("./actionTypes");

const init = {
  users: [],
  loading: true,
  msg: null,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETUSERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    default:
      return state;
  }
};
export default reducer;
