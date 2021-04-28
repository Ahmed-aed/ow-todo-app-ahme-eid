/* eslint-disable import/no-anonymous-default-export */
export const GET_TODO = "GET_TODO";
export const SET_TODO = "SET_TODO";
export const POST_TODO = "POST_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

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
export const completeToDo = (toDoId) => ({
  type: COMPLETE_TODO,
  toDoId,
});
const initialStat = {
  toDo: [],
};

export default (state = initialStat, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, toDo: action.payload };
    case POST_TODO:
      return { ...state, toDo: [...state.toDo, action.payload] };
    case COMPLETE_TODO:
      return {
        ...state,
        toDo: state.toDo?.filter((row) => {
          row.id === action.payload;
        }),
      };
    default:
      return state;
  }
};
