import React from "react";
import { Card } from "react-bootstrap";
import propTypes from "prop-types";

function ListItem({ title, content, color }) {
    return (
    <Card>
        <Card.Body>
            <Card.Title style={color}>{title}</Card.Title>
            <Card.Text>
            {content}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

ListItem.defaultProps = {
    title: "글 제목", 
    content: "글 내용",
}

ListItem.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
}

export default ListItem;