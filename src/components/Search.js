import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default function SearchInput({ onItemSearch }) {
  return (
    <div style={{ margin: "10px 20px" }}>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={(value) => onItemSearch(value)}
      />
    </div>
  );
}
