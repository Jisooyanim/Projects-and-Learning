import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import Button from "./Button";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { colors } from "../themes/colors";
import { fonts } from "../themes/fonts";

const AddTask = () =>{
    
    return(
        <Row style={{
            display:"flex",
            alignItems: "center",
            marginBottom:"45px",
        }}>
            <Col>
                <Form>
                    <Form.Control 
                        type= "text" 
                        placeholder= "Add a new task" 
                        style={{ 
                            width: '500px', 
                            padding: '10px', 
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: colors.purple,
                            borderRadius: '8px', 
                            backgroundColor: colors.gray_purple,
                            display: "flex",
                            alignItems: "flex-start",
                            fontFamily: fonts.inter,
                            fontSize:"16px",
                    }}/>
                </Form>
            </Col>
            
            <Col style={{ marginLeft:"8px" }}>
                <Button 
                    width= {30} 
                    height= {40}
                    backgroundColor= {colors.gray_purple}
                >
                    <AddBoxIcon style={{
                        fontSize:"40px",
                        color: colors.purple,
                    }}/>
                </Button>
            </Col>
        </Row>
    );
};

export default AddTask;