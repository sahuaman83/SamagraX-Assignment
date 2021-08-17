import React, { useState, useEffect } from "react";
import IndexedDb from "./Database/indexedDb";
import { Card, Button } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";

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
       fetchComments();
       fetchPhotos();
       fetchTodos();
       fetchPosts();
      await runIndexDb();
    }, 5000);
  }, []);

  const runIndexDb = async () => {
    await indexedDb.createObjectStore(["comments", "photos", "todos", "posts"]);
    savefetchComments();
    savefetchPhotos();
    savefetchTodos();
    savefetchPosts();
  };

  //Saving Fetched-data in IndexedDB function
  const savefetchComments = () => {
    const savestrttime = new Date().getTime();
    indexedDb.putBulkValue("comments", cmntdata);
    const saveendtime = new Date().getTime();
    setsaveCmntStrt(savestrttime);
    setsaveCmntEnd(saveendtime);
  };

  const savefetchPhotos = () => {
    const savestrttime = new Date().getTime();
    indexedDb.putBulkValue("photos", photodata);
    const saveendtime = new Date().getTime();
    setsavePhtoStrt(savestrttime);
    setsavePhtoEnd(saveendtime);
  };

  const savefetchTodos = () => {
    const savestrttime = new Date().getTime();
    indexedDb.putBulkValue("todos", tododata);
    const saveendtime = new Date().getTime();
    setsaveTodoStrt(savestrttime);
    setsaveTodoEnd(saveendtime);
  };

  const savefetchPosts = () => {
    const savestrttime = new Date().getTime();
    indexedDb.putBulkValue("posts", postdata);
    const saveendtime = new Date().getTime();
    setsavePostStrt(savestrttime);
    setsavePostEnd(saveendtime);
  };

  //API Fetch functions
  const fetchComments = async () => {
    const strttime = new Date().getTime();
    await fetch("https://jsonplaceholder.typicode.com/comments");
    const endtime = new Date().getTime();
    setCmntStrt(strttime);
    setCmntEnd(endtime);
  };

  const fetchPhotos = async () => {
    const strttime = new Date().getTime();
    await fetch("https://jsonplaceholder.typicode.com/photos");
    const endtime = new Date().getTime();
    setPhtoStrt(strttime);
    setPhtoEnd(endtime);
  };

  const fetchTodos = async () => {
    const strttime = new Date().getTime();
    await fetch("https://jsonplaceholder.typicode.com/todos");
    const endtime = new Date().getTime();
    setTodoStrt(strttime);
    setTodoEnd(endtime);
  };

  const fetchPosts = async () => {
    const strttime = new Date().getTime();
    await fetch("https://jsonplaceholder.typicode.com/posts");
    const endtime = new Date().getTime();
    setPostStrt(strttime);
    setPostEnd(endtime);
  };

  //Current timestamp function
  const Unixtime = () => {
    setInterval(() => {
      setCurTime(new Date().getTime());
    }, 1000);
    return curTime;
  };

  //Button Onclick functions
  const comments = async() => {
    await fetchComments();
    await savefetchComments();
  };
  const photos = async() => {
    await fetchPhotos();
    await savefetchPhotos();
  };
  const todos = async() => {
    await fetchTodos();
    await savefetchTodos();
  };
  const posts = async() => {
    await fetchPosts();
    await savefetchPosts();
  };

  return (
    <div className="App">
      <Row justify="center">
        <Col style={{ border: "3px solid #eee" }} span={9}>
          <Card style={{ height: 100 }}>
            <h1>SamagraX App</h1>
          </Card>
          <Row>
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
          <Row>
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
              <Button type="primary" onClick={comments}>
                Button 1
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={photos}>
                Button 2
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Button type="primary" onClick={todos}>
                Button 3
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" onClick={posts}>
                Button 4
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Card style={{ height: 100 }}>
                <p style={{ color: "blue" }}><b>{Unixtime()}</b></p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
