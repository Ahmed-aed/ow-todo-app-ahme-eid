import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input, Form, Checkbox, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import "./style.css";

const ToDo = () => {
  const toDo = useSelector((state) => state.todo.toDo);
  console.log(useSelector((state) => state), '5555555555');


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
    const newData = toDoList.map((row) => {
      row.completed = data.includes(row.value);
      return row;
    });
    dispatch({
      type: "COMPLETE_TODO",
      payload: newData,
    });
  };

  const handleDeleteToDo = (e, data) => {
    const newData = toDoList?.filter((row) => row.id !== data.id);

    dispatch({
      type: "DELETE_TODO",
      payload: newData,
    });
  };

  const handelFilterActive = () => {
    const newData = toDoList.filter((row) => !row.completed)
    dispatch({
      type: 'FILTER_ACTIVE_TODO',
      payload: newData
    })

  }

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
        <Checkbox.Group value={completedToDo} onChange={handelCompleteToDo}>
          {toDoList?.map((row) => (
            <div>
              <Checkbox value={row.value}>{row.label}</Checkbox>
              <Button
                icon={<CloseOutlined />}
                onClick={(e) => handleDeleteToDo(e, row)}
              />
            </div>
          ))}
          <div className="spanDiv">
            <span>5 Items left</span>
            <span className="marginLeft">All</span>
            <span className="marginLeft" onClick={handelFilterActive}>Active</span>
            <span className="marginLeft">Completed</span>
            <span className="marginLeft">Clear Completed</span>
          </div>
        </Checkbox.Group>
      </Col>
    </Row>
  );
};

export default ToDo;
