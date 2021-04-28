import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input, Form, Checkbox } from "antd";

import "./style.css";

const ToDo = () => {
  const toDo = useSelector((state) => state.todo.toDo);
  const [toDoList, setToDoList] = useState([]);
  const [completedToDo, setCompletedToDo] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_TODO",
      payload: {},
    });
  }, [dispatch]);
  useEffect(() => {
    setToDoList(toDo);

    setCompletedToDo(
      toDo?.filter((row) => row.completed).map((row) => row.value)
    );
  }, [toDo]);
  const onSubmitAdd = (value) => {
    dispatch({
      type: "POST_TODO",
      payload: {
        id: Math.random().toString(36).substring(7),
        label: value.toDo,
        value: value.toDo,
        completed: false,
      },
    });
  };

  const handelCompleteToDo = (data) => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: data,
    });
  };

  return (
    <Row type="flex" justify="center" align="middle">
      <Col span={24}>
        <div className="background" />
      </Col>
      <Col span={24}>
        <Form onFinish={onSubmitAdd}>
          <Form.Item name="toDo">
            <Input />
          </Form.Item>
        </Form>
      </Col>
      <Col>
        <Checkbox.Group
          options={toDoList}
          value={completedToDo}
          onChange={handelCompleteToDo}
        />
      </Col>
    </Row>
  );
};

export default ToDo;
