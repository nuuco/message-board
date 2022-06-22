import React from "react";
import ListItem from "./ListItem";
import axios from 'axios';

function List() {

    const handleOnClick = () => {
        axios.get("/list")
        .then((res) => console.log(res));
    }
    const makeListItems = () => {
        const data = [
            { title: "양희준", content: "코드스테이츠"},
            { title: "심소영", content: "코드스테이츠"},
            { title: "이유진", content: "코드스테이츠"}
        ];

        return data.map((item, idx) => {
            return <ListItem key={idx} title={item.title} content={item.content}/>
        })
    }
    return (
        <>
          {makeListItems()}
          <button onClick={handleOnClick}>통신</button>
        </>
    )
}

export default List;