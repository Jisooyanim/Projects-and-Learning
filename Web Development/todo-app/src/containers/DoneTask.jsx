import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "../themes/colors";
import { fonts } from "../themes/fonts";

const DoneTask = ({ children }) =>{

    return(
        <Container
            fluid
            style={{
                height: "75px",
                width: "566px",
                position: "flex",
                marginBottom: "10px",
                backgroundColor: colors.dark_purple,
                borderRadius: "10px",
        }}>
            <Row style ={{
                display:"flex",
                alignItems: "center",
                marginTop: "3px",
                padding: "20px",
            }}>

                <Col style={{
                    marginTop: "6px",
                    fontFamily: fonts.inter,
                    fontSize: "16px",
                    color: colors.green,
                    textDecoration: "line-through",
                }}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default DoneTask;