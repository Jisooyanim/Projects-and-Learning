import React from "react";
import DoneTask from "../containers/DoneTask";
import { Container, Row, Col } from "react-bootstrap";
import { fonts } from "../themes/fonts";

const Done = () =>{

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
                height:"215px",
                width:"565px",
                marginTop: "30px",
                border: '1px solid rgba(204, 204, 204, 0.5)'
        }}>
            <Row style ={{
                display:"flex",
                alignItems: "center",
                marginBottom: "10px",
            }}>
                <span style={{ ...fontStyle }}>
                    Done - (counter)
                </span>
            </Row>

            <DoneTask>
                <span>Done1</span>
            </DoneTask>
            <DoneTask>
                <span>Done2</span>
            </DoneTask>
        </Container>
    );
};

export default Done;