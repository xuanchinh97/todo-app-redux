import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../redux/actions';
import { todoRemainingSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {

  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todoRemainingSelector)

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))

    setTodoName("")
    setPriority("Medium")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo()
    }
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)', maxHeight: 230 }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>

          <Input value={todoName} onChange={handleInputChange} onKeyDown={handleKeyDown} />

          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
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

          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>

        </Input.Group>
      </Col>
    </Row>
  );
}
