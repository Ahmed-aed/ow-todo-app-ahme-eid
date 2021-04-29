import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Checkbox, Button, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";

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
    const newData = toDoList?.filter((row) => row.value !== data.value);

    dispatch({
      type: "DELETE_TODO",
      payload: newData,
    });
  };

  const handelFilterActive = () => {
    const newData = toDoList.filter((row) => !row.completed)
    setToDoList(newData)
    dispatch({
      type: 'FILTER_ACTIVE_TODO',
      payload: newData
    })

  }

  const handelFilterCompleted = () => {

    const newData = toDoList.filter((row) => row.completed)
    setToDoList(newData)
    dispatch({
      type: 'FILTER_COMPLETED_TODO',
      payload: newData
    })

  }

  const handelFilterClearComplete = () => {
    const newData = toDoList.filter((row) => !row.completed)
    setToDoList(newData)
    dispatch({
      type: 'FILTER_CLEAR_COMPLETED',
      payload: newData
    })

  }
  const handelFilterAll = () => {
    dispatch({
      type: "GET_TODO",
      payload: {},
    });
  }

  console.log(toDoList.filter((row) => !row.completed));

  return (
    <div className='container'>
      <div className="background" />
      <Row className='todoDiv'>
        <Col span={10} className='todoContent'>
          <div className='formDiv'>
            <Form onFinish={onSubmitAdd}>
              <Form.Item name="toDo">
                <Input placeholder='Add New Todo..' />
              </Form.Item>
            </Form>
          </div>
          <div className='todoList'>
            <Checkbox.Group value={completedToDo} onChange={handelCompleteToDo}>
              {toDoList?.map((row) => (
                <div className='todoListSpan'>
                  <Checkbox value={row.value}>{row.label}</Checkbox>
                  <Button
                    icon={<CloseOutlined />}
                    onClick={(e) => handleDeleteToDo(e, row)}
                  />
                </div>
              ))}
              <div className="spanDiv">
                <span className="borderLeft"><span>{toDoList.filter((row) => !row.completed).length}</span> Items left</span>
                <span className="borderLeft" onClick={handelFilterAll}>All</span>
                <span className="borderLeft" onClick={handelFilterActive}>Active</span>
                <span className="borderLeft" onClick={handelFilterCompleted}>Completed</span>
                <span className="borderLeft" onClick={handelFilterClearComplete}>Clear Completed</span>
              </div>
            </Checkbox.Group>
          </div>
        </Col>
      </Row>
    </div>


  );
};

export default ToDo;