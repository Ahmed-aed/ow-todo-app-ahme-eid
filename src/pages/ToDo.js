import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToDo = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "GET_TODO",
      payload: {},
    });
  }, [dispatch]);
  const toDo = useSelector((state) =>
    console.log(state.todo.toDo, "6666666666666")
  );
  console.log(useSelector, toDo);
  return <div>ToDo</div>;
};

export default ToDo;
