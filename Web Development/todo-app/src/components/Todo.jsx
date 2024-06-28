import React from "react";
import Task from "../containers/Task";
import { Container, Row } from "react-bootstrap";
import { fonts } from "../themes/fonts";

const Todo = () =>{

    const fontStyle = {
        fontFamily: fonts.inter,
        fontSize: "16px",
        fontWeight: "bold",
        letterSpacing: "0.5px",
    };

    return(
        <Container 
            fluid 
            style={{
                height:"380px",
                width:"565px",
                border: '1px solid rgba(204, 204, 204, 0.5)'
        }}>
            <Row style ={{
                display:"flex",
                alignItems: "center",
                marginBottom: "10px",
            }}>
                <span style={{ ...fontStyle }}>
                    Tasks to do - (counter)
                </span>
            </Row>

            <Task>
                <span>Test1</span>
            </Task>
            <Task>
                <span>Test2</span>
            </Task>
            <Task>
                <span>Test3</span>
            </Task>
            <Task>
                <span>Test4</span>
            </Task>
        </Container>
    );
};

export default Todo;