import { Col, Input, Radio, Row, Select, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterSlice } from './filterSlice';

const { Search } = Input;

export default function Filters() {

  const [searchText, setSearchText] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterPriorities, setFilterPriorities] = useState([])

  const dispatch = useDispatch()

  const handleSearchTextChange = (e) => {
    let keyword = e.target.value
    setSearchText(keyword)
    dispatch(filterSlice.actions.searchFilterChange(keyword))
  }

  const handleStatusChange = (e) => {
    let status = e.target.value
    setFilterStatus(status)
    dispatch(filterSlice.actions.statusFilterChange(status))
  }

  const handlePrioritiesChange = (value) => {
    setFilterPriorities(value)
    dispatch(filterSlice.actions.priorityFilterChange(value))
  }

  return (
    <Row justify='center'>

      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={searchText} onChange={handleSearchTextChange} placeholder='input search text' />
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handlePrioritiesChange}
          value={filterPriorities}
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
      </Col>

    </Row>
  );
}
