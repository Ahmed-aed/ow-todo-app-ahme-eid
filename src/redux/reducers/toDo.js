/* eslint-disable import/no-anonymous-default-export */
export const GET_TODO = "GET_TODO";
export const SET_TODO = "SET_TODO";

export const getToDo = () => ({
  type: GET_TODO,
});

export const setToDo = (toDo) => ({
  type: SET_TODO,
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
    default:
      return state;
  }
};
