import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchFilterChange,
  statusFilterChange,
  prioriryFilterChange,
} from "../../redux/action";
import { filtersSlice } from "./FiltersSlice";
const { Search } = Input;

export default function Filters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [option, setOption] = useState([]);
  const dispatch = useDispatch();
  const handleChangeSearch = (e) => {
    const text = e.target.value;

    setSearchTerm(text);
    dispatch(filtersSlice.actions.searchFilterChange(text));
  };

  const handleChangeStatus = (e) => {
    const statusValue = e.target.value;

    setStatus(statusValue);
    dispatch(filtersSlice.actions.statusFilterChange(statusValue));
  };
  const handleSelectOption = (prioriry) => {
    setOption(prioriry);
    dispatch(filtersSlice.actions.prioriryFilterChange(prioriry));
  };

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchTerm}
          onChange={handleChangeSearch}
          placeholder='input search text'
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={option}
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: "100%" }}
          onChange={handleSelectOption}
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
