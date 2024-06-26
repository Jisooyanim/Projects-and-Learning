import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../containers/Layout";
import Background from "../containers/Background";
import Holder from "../containers/Holder";
import Tasks from "../components/Tasks";
import { colors } from "../themes/colors";

const Todo = () => {

    return (
        <Layout>
            <Background>
                <Holder>
                    <p>Test</p>
                </Holder>
            </Background>
        </Layout>
    );
};

export default Todo;