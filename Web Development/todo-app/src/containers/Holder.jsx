import React from "react";
import { Container, Row } from "react-bootstrap";
import { colors } from "../themes/colors";

const Holder = ({ children }) =>{

    return(
        <Container
            fluid
            className="d-flex flex-row"
            style = {{
                height:"758px",
                width:"600px",
                position: "absolute",
                marginTop: "55px",
                marginLeft:"665px",
                padding:"30px",
                backgroundColor: colors.gray_purple,
                borderRadius:"15px",
        }}>
            {children}
        </Container>
    );
};

export default Holder;