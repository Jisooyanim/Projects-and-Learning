import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fonts } from "../themes/fonts";

const Todo = () =>{

    const fontStyle = {
        fontFamily: fonts.inter,
        fontSize: "16px",
        fontWeight: "bold",
    };

    return(
        <Container 
            fluid 
            style={{
                height:"100px",
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
        </Container>
    );
};

export default Todo;