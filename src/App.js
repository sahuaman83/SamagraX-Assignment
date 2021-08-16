import './App.css';
import 'antd/dist/antd.css';
import React, {useState, useEffect} from 'react';
import { Row, Col } from 'antd';
import { Card, Button } from 'antd';


function App() {

  const [curTime, setCurTime] = useState();

  const [cmntStrt, setCmntStrt] = useState();
  const [cmntEnd, setCmntEnd] = useState();

  const [phtoStrt, setPhtoStrt] = useState();
  const [phtoEnd, setPhtoEnd] = useState();

  const [todoStrt, setTodoStrt] = useState();
  const [todoEnd, setTodoEnd] = useState();

  const [postStrt, setPostStrt] = useState();
  const [postEnd, setPostEnd] = useState();

  useEffect(() => {

    setTimeout(()=>{
      fetchComments();
      fetchPhotos();
      fetchTodos();
      fetchPosts();
      
    }, 1000)

  },[])

  const fetchComments = async () =>{
    const strttime = new Date().getTime()
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const endtime = new Date().getTime()

    setCmntStrt(strttime);
    setCmntEnd(endtime);
    const data = await response.json();
    console.log(data);
  }
  const fetchPhotos = async () =>{
    const strttime = new Date().getTime()
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const endtime = new Date().getTime()

    const data = await response.json();
    setPhtoStrt(strttime);
    setPhtoEnd(endtime);
    console.log(data);
  }
  const fetchTodos = async () =>{
    const strttime = new Date().getTime()
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const endtime = new Date().getTime()

    const data = await response.json();
    setTodoStrt(strttime);
    setTodoEnd(endtime);
    console.log(data);
  }
  const fetchPosts = async () =>{
    const strttime = new Date().getTime()
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const endtime = new Date().getTime()

    const data = await response.json();
    setPostStrt(strttime);
    setPostEnd(endtime);
    console.log(data);
  }

  const Unixtime = () =>{
    setInterval(() => {
      setCurTime(new Date().getTime())
    }, 5000)
    return curTime;
  }

  return (
    <div className="App">
      <Row justify="center">
            <Col style={{border: '3px solid #eee' }} span={9}>
                <Card style={{ height: 100}}>
                  <p>Test App</p>
                </Card>
              <Row style={{backgroundColor: 'pink'}}>
                <Col span={12}>
                  <Card style={{ height: 180}}>
                    <p style={{color: 'green'}}>Start: {cmntStrt} </p>
                    <p style={{color: 'red'}}>End: {cmntEnd}</p>
                    <p style={{color: 'green'}}>Start Save:</p>
                    <p style={{color: 'red'}}>End Save:</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card style={{ height: 180}}>
                    <p style={{color: 'green'}}>Start: {phtoStrt}</p>
                    <p style={{color: 'red'}}>End: {phtoEnd}</p>
                    <p style={{color: 'green'}}>Start Save:</p>
                    <p style={{color: 'red'}}>End Save:</p>
                  </Card>
                </Col>
              </Row>

              <Row style={{backgroundColor: 'pink'}}>
                <Col span={12}>
                  <Card style={{ height: 180}}>
                  <p style={{color: 'green'}}>Start: {todoStrt}</p>
                    <p style={{color: 'red'}}>End: {todoEnd}</p>
                    <p style={{color: 'green'}}>Start Save:</p>
                    <p style={{color: 'red'}}>End Save:</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card style={{ height: 180}}>
                    <p style={{color: 'green'}}>Start: {postStrt}</p>
                    <p style={{color: 'red'}}>End: {postEnd}</p>
                    <p style={{color: 'green'}}>Start Save:</p>
                    <p style={{color: 'red'}}>End Save:</p>
                  </Card>
                </Col>
              </Row>

              <br/>

              <Row>
                <Col span={12}>
                <Button type="primary" onClick={fetchComments}>Button 1</Button>
                </Col>
                <Col span={12}>
                <Button type="primary"  onClick={fetchPhotos}>Button 2</Button>
                </Col>
              </Row>
              
              <br/>

              <Row>
                <Col span={12}>
                <Button type="primary"  onClick={fetchTodos}>Button 3</Button>
                </Col>
                <Col span={12}>
                <Button type="primary"  onClick={fetchPosts}>Button 4</Button>
                </Col>
              </Row>

              <br/>

              <Row>
                <Col span={24}>
                  <Card style={{ height: 100}}>
                    <p style={{color: 'blue'}}>{Unixtime()}</p>
                  </Card>
                </Col>
              </Row>

            </Col>
          

        
      </Row>
      
    </div>
  );
}

export default App;
