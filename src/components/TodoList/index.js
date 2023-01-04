import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/action";
import { addNewTodo, addTodos, todoListSlice } from "./TodoListSlice";
import Todo from "../Todo";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import {
  todosRemainingSelector,
  statusListSelector,
} from "../../redux/selectors";
import { useRef } from "react";
export default function TodoList() {
  const [data, setData] = useState({
    name: "",
    prioriry: "Medium",
  });
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const status = useSelector(statusListSelector);
  const handleAddClickButton = () => {
    console.log(["status"], status);
    inputRef.current.focus();
    if (!data.name.trim().length) return;
    // dispatch(
    //   todoListSlice.actions.addTodo({
    //     id: nanoid(),
    //     completed: false,
    //     ...data,
    //   })
    // );
    dispatch(
      addNewTodo({
        id: nanoid(),
        completed: false,
        ...data,
      })
    );
    setData({
      ...data,
      name: "",
    });
  };

  console.log(todoList);

  const handleDataChange = (value, type) => {
    setData({
      ...data,
      [type]: value,
    });
    // console.log({
    //   ...data,
    //   [type]: value,
    // });
  };
  if (status === "loading") {
    return "...Loading...";
  }

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo key={item.id} {...item} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            ref={inputRef}
            value={data.name}
            onChange={(e) => {
              handleDataChange(e.target.value, "name");
            }}
          />
          <Select
            value={data.prioriry}
            onChange={(value) => handleDataChange(value, "prioriry")}
            defaultValue='Medium'
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddClickButton} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
