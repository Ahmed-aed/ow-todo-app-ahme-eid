import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input, Form, Checkbox } from "antd";

import "./style.css";

const ToDo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_TODO",
      payload: {},
    });
  }, [dispatch]);
  const toDo = useSelector((state) => state.todo.toDo);
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
        <Checkbox.Group options={toDo} />
      </Col>
    </Row>
  );
};

export default ToDo;
