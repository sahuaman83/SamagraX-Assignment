import "./App.css";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import IndexedDb from "./Database/indexedDb";
import { Row, Col } from "antd";
import { Card, Button } from "antd";

const indexedDb = new IndexedDb("SamagraX");

function App() {
  let cmntdata = [],
    photodata = [],
    tododata = [],
    postdata = [];

  const [curTime, setCurTime] = useState();

  const [cmntStrt, setCmntStrt] = useState();
  const [cmntEnd, setCmntEnd] = useState();

  const [phtoStrt, setPhtoStrt] = useState();
  const [phtoEnd, setPhtoEnd] = useState();

  const [todoStrt, setTodoStrt] = useState();
  const [todoEnd, setTodoEnd] = useState();

  const [postStrt, setPostStrt] = useState();
  const [postEnd, setPostEnd] = useState();

  const [savecmntStrt, setsaveCmntStrt] = useState();
  const [savecmntEnd, setsaveCmntEnd] = useState();

  const [savephtoStrt, setsavePhtoStrt] = useState();
  const [savephtoEnd, setsavePhtoEnd] = useState();

  const [savetodoStrt, setsaveTodoStrt] = useState();
  const [savetodoEnd, setsaveTodoEnd] = useState();

  const [savepostStrt, setsavePostStrt] = useState();
  const [savepostEnd, setsavePostEnd] = useState();

  useEffect(() => {
    setTimeout(async () => {
      await fetchComments();
      await fetchPhotos();
      await fetchTodos();
      await fetchPosts();
      await runIndexDb();
    }, 5000);
  }, []);

  const runIndexDb = async () => {
    await indexedDb.createObjectStore(["comments", "photos", "todos", "posts"]);
    await savefetchComments();
    await savefetchPhotos();
    await savefetchTodos();
    await savefetchPosts();
  };

  const savefetchComments = async () => {
    const savestrttime = new Date().getTime();
    await indexedDb.putBulkValue("comments", cmntdata);
    const saveendtime = new Date().getTime();

    setsaveCmntStrt(savestrttime);
    setsaveCmntEnd(saveendtime);
  };

  const savefetchPhotos = async () => {
    const savestrttime = new Date().getTime();
    await indexedDb.putBulkValue("photos", photodata);
    const saveendtime = new Date().getTime();

    setsavePhtoStrt(savestrttime);
    setsavePhtoEnd(saveendtime);
  };

  const savefetchTodos = async () => {
    const savestrttime = new Date().getTime();
    await indexedDb.putBulkValue("todos", tododata);
    const saveendtime = new Date().getTime();

    setsaveTodoStrt(savestrttime);
    setsaveTodoEnd(saveendtime);
  };

  const savefetchPosts = async () => {
    const savestrttime = new Date().getTime();
    await indexedDb.putBulkValue("posts", postdata);
    const saveendtime = new Date().getTime();

    setsavePostStrt(savestrttime);
    setsavePostEnd(saveendtime);
  };

  const fetchComments = async () => {
    const strttime = new Date().getTime();
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const endtime = new Date().getTime();

    setCmntStrt(strttime);
    setCmntEnd(endtime);
    cmntdata = await response.json();
  };
  const fetchPhotos = async () => {
    const strttime = new Date().getTime();
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const endtime = new Date().getTime();

    photodata = await response.json();
    setPhtoStrt(strttime);
    setPhtoEnd(endtime);
  };
  const fetchTodos = async () => {
    const strttime = new Date().getTime();
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const endtime = new Date().getTime();

    tododata = await response.json();
    setTodoStrt(strttime);
    setTodoEnd(endtime);
  };
  const fetchPosts = async () => {
    const strttime = new Date().getTime();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const endtime = new Date().getTime();

    postdata = await response.json();
    setPostStrt(strttime);
    setPostEnd(endtime);
  };

  const Unixtime = () => {
    setInterval(() => {
      setCurTime(new Date().getTime());
    }, 1000);
    return curTime;
  };

  const button1 = () => {
    fetchComments();
  };
  const button2 = () => {
    fetchPhotos();
  };
  const button3 = () => {
    fetchTodos();
  };
  const button4 = () => {
    fetchPosts();
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col style={{ border: "3px solid #eee" }} span={9}>
          <Card style={{ height: 100 }}>
            <p>Test App</p>
          </Card>
          <Row style={{ backgroundColor: "pink" }}>
            <Col span={12}>
              <Card style={{ height: 180 }}>
                <p style={{ color: "green" }}>Start: {cmntStrt} </p>
                <p style={{ color: "red" }}>End: {cmntEnd}</p>
                <p style={{ color: "green" }}>Start Save: {savecmntStrt}</p>
                <p style={{ color: "red" }}>End Save: {savecmntEnd}</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ height: 180 }}>
                <p style={{ color: "green" }}>Start: {phtoStrt}</p>
                <p style={{ color: "red" }}>End: {phtoEnd}</p>
                <p style={{ color: "green" }}>Start Save: {savephtoStrt}</p>
                <p style={{ color: "red" }}>End Save: {savephtoEnd}</p>
              </Card>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "pink" }}>
            <Col span={12}>
              <Card style={{ height: 180 }}>
                <p style={{ color: "green" }}>Start: {todoStrt}</p>
                <p style={{ color: "red" }}>End: {todoEnd}</p>
                <p style={{ color: "green" }}>Start Save: {savetodoStrt}</p>
                <p style={{ color: "red" }}>End Save: {savetodoEnd}</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ height: 180 }}>
                <p style={{ color: "green" }}>Start: {postStrt}</p>
                <p style={{ color: "red" }}>End: {postEnd}</p>
                <p style={{ color: "green" }}>Start Save: {savepostStrt}</p>
                <p style={{ color: "red" }}>End Save: {savepostEnd}</p>
              </Card>
            </Col>
          </Row>

          <br />

          <Row>
            <Col span={12}>
              <Button type="primary" onClick={button1}>
                Button 1
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={button2}>
                Button 2
              </Button>
            </Col>
          </Row>

          <br />

          <Row>
            <Col span={12}>
              <Button type="primary" onClick={button3}>
                Button 3
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={button4}>
                Button 4
              </Button>
            </Col>
          </Row>

          <br />

          <Row>
            <Col span={24}>
              <Card style={{ height: 100 }}>
                <p style={{ color: "blue" }}>{Unixtime()}</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
