/* eslint-disable import/no-anonymous-default-export */
export const GET_TODO = "GET_TODO";
export const SET_TODO = "SET_TODO";
export const POST_TODO = "POST_TODO";

export const getToDo = () => ({
  type: GET_TODO,
});

export const setToDo = (toDo) => ({
  type: SET_TODO,
  toDo,
});

export const postToDo = (toDo) => ({
  type: POST_TODO,
  toDo,
});
const initialStat = {
  toDo: undefined,
};

export default (state = initialStat, action) => {
  switch (action.type) {
    case SET_TODO:
      const { toDo } = action;
      return { ...state, toDo };

    case POST_TODO:
      return { ...state, toDo: [action.toDo] };
    default:
      return state;
  }
};
