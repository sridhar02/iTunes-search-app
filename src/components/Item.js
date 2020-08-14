import React, { useState } from "react";
import { Modal, Card, Row, Col } from "antd";

function ModelContent({ searchResult }) {
  console.log(searchResult);
  return (
    <Row>
      <Col>
        <p>Artist Name: {searchResult.artistName}</p>
        <p>Colleaction Name: {searchResult.collectionName}</p>
        <p>Colleaction Price: {searchResult.collectionPrice}</p>
        <a href={`${searchResult.trackViewUrl}`}>Track URL</a>
      </Col>
    </Row>
  );
}

export default function Item({ searchResult }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  return (
    <Card style={{ margin: "8px" }}>
      <img
        alt="example"
        src={`${searchResult.artworkUrl100.replace("100x100", "1200x1200")}`}
        style={{ margin: "20px", height: "250px", width: "250px" }}
        onClick={showModal}
      />
      <p>Track Name:</p>
      <p>{searchResult.trackName}</p>
      <Modal
        title={searchResult.trackName}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModelContent searchResult={searchResult} />
      </Modal>
    </Card>
  );
}
