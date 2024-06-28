import React from "react";
import Button from "../components/Button";
import { Container, Row, Col } from "react-bootstrap";
import { colors } from "../themes/colors";
import { fonts } from "../themes/fonts";
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Task = ({ children }) =>{

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
                    color: colors.purple,
                }}>
                    {children}
                </Col>

                <Col 
                    style={{ 
                        display: "flex", 
                        alignItems: "center",
                        marginLeft: "auto", 
                }}>
                    <Button 
                        width={25} 
                        height={25}
                        backgroundColor={colors.dark_purple}
                        marginRight="10px"
                    >
                        <CheckIcon style={{
                            fontSize: "25px",
                            color: colors.purple,
                        }}/>
                    </Button>

                    <Button 
                        width={25} 
                        height={25}
                        backgroundColor={colors.dark_purple}
                    >
                        <DeleteOutlineIcon style={{
                            fontSize: "25px",
                            color: colors.purple,
                        }}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Task;