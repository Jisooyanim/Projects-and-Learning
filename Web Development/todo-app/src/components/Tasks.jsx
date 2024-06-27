import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTask from "./AddTask";
import Todo from "./Todo";

const Tasks = () =>{
    
    return(
        <Container 
            fluid 
            style={{
                height:"500px",
                padding:"20px",
                border: '1px solid rgba(204, 204, 204, 0.5)'
        }}>
            <AddTask />
            <Todo />
        </Container>
    );
};

export default Tasks;