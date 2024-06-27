import React from "react";
import Layout from "../containers/Layout";
import Background from "../containers/Background";
import Holder from "../containers/Holder";
import Tasks from "../components/Tasks";

const Todo = () => {

    return (
        <Layout>
            <Background>
                <Holder>
                    <Tasks/>
                </Holder>
            </Background>
        </Layout>
    );
};

export default Todo;