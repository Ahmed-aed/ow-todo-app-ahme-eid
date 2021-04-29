/* eslint-disable import/no-anonymous-default-export */
export const GET_TODO = "GET_TODO";
export const SET_TODO = "SET_TODO";
export const POST_TODO = "POST_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const FILTER_ACTIVE_TODO = "FILTER_ACTIVE_TODO"
export const FILTER_Completed_TODO = "FILTER_Completed_TODO"
export const FILTER_ClearCompleted_TODO = "FILTER_ClearCompleted_TODO"

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
export const completeToDo = (toDo) => ({
  type: COMPLETE_TODO,
  toDo,
});
export const deleteToDo = (toDo) => ({
  type: DELETE_TODO,
  toDo,
});
export const filterActiveToDo = (toDo) => ({
  type: FILTER_ACTIVE_TODO,
  toDo,
});
export const filterCompletedToDo = (toDo) => ({
  type: FILTER_Completed_TODO,
  toDo,
});

export const filterClearCompletedToDo = (toDo) => ({
  type: FILTER_ClearCompleted_TODO,
  toDo,
});
const initialStat = {
  toDo: [],
  filterToDo: []
};

export default (state = initialStat, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, toDo: action.payload };
    case POST_TODO:
      return { ...state, toDo: [...state.toDo, action.payload] };
    case COMPLETE_TODO:
      return { ...state, toDo: action.payload };
    case DELETE_TODO:
      return { ...state, toDo: action.payload };
    case FILTER_ACTIVE_TODO:
      return { ...state, filterToDo: action.payload };
    case FILTER_Completed_TODO:
      return { ...state, filterToDo: action.payload };
    case FILTER_ClearCompleted_TODO:
      return { ...state, filterToDo: action.payload };
    default:
      return state;
  }
};
