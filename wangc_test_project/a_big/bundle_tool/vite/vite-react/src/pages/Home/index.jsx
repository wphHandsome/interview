import React from "react";
import { Button } from "antd";
import Toolbar from "../Toolbar";
import "./index.scss";

const Home = () => {
    return (
        <div className="home">
            <h2>home</h2>
            <Toolbar></Toolbar>
            <Button>open</Button>
        </div>
    );
};

export default Home;
