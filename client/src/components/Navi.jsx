import React from "react";
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'


function Navi() {
    return (
    <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={"span"}>
            <Link to={"/"} style={ {textDecoration: "none"}}>List</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={"span"}>
            <Link to={"/new"} style={ {textDecoration: "none"}}>Update</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}

export default Navi;