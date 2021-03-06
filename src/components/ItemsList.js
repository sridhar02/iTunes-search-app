import React from "react";
import { Row } from "antd";

import Item from "./Item.js";

export default function ItemsList({ searchResults }) {
  return (
    <Row justify="center" style={{backgroundColor:"#9B9E8F"}}>
      {searchResults.map((searchResult) => (
        <Item key={searchResult.trackId} searchResult={searchResult} />
      ))}
    </Row>
  );
}
