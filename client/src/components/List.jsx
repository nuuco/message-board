import axios from "axios";
import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import PageList from './PageList';
//import { Routes, Route } from 'react-router-dom';

function List() {
    const [data, setDate] = useState([]);
    const [page, setPage] = useState(1);
    const makeListItems = (data = []) => {
        return data.map((item, idx) => {
            return <ListItem key={idx} title={item.title} content={item.content}/>
        })
    }
    useEffect(() => {
        axios.get(`api/list/?page=${page}`)
        .then(res => setDate(res.data));
    }, [ page ])
    /*
    const makePagination = (data = []) => {
        return (
            <Routes>
                {data.map((item, index) => {
                    return <Route key={index} path={`page${item.number}`} element={<PageList />} />
                })}
            </Routes>
        )
    }*/
    return (
        <>
          {makeListItems(data)}
          <PageList setPage={setPage}/>
        </>
    )
}

export default List;