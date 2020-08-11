import React from "react";

import { Card } from "antd";
import { Row, Col } from "antd";

const { Meta } = Card;
export default function Item({ searchResult }) {
  return (
      <Card style={{ margin:"8px"}}>
        <img
          alt="example"
          src={`${searchResult.artworkUrl100.replace('100x100', '1200x1200')}`}
            style={{ margin:"20px",height:"250px",width:"250px" }}
        />
        <p>Track Name:</p>
        <p>{searchResult.trackName}</p>
      </Card>
  );
}
