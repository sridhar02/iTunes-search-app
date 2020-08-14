import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default function SearchInput({ onItemSearch }) {
  return (
    <>
      <div style={{ margin: "30px 20px" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          // onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={(value) => onItemSearch(value)}
        />
      </div>
    </>
  );
}
