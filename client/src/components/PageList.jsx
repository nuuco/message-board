import React, { useRef } from "react";
import { Pagination } from 'react-bootstrap';
//import axios from 'axios';



function PageList({ setPage }) {
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const buttonRef3 = useRef(null);

    const handleOnClick1 = () => {
        const buttonValue = buttonRef1.current.textContent;
        setPage(buttonValue);
       //console.log(buttonRef.current);
       //document.querySelector("~~");
    }

    const handleOnClick2 = () => {
        const buttonValue = buttonRef2.current.textContent;
        setPage(buttonValue);
    }

    const handleOnClick3 = () => {
        const buttonValue = buttonRef3.current.textContent;
        setPage(buttonValue);

    }

    return (
        <Pagination>
            <Pagination.Item ref={buttonRef1} onClick={handleOnClick1}>{1}</Pagination.Item>
            <Pagination.Item ref={buttonRef2} onClick={handleOnClick2}>{2}</Pagination.Item>
            <Pagination.Item ref={buttonRef3} onClick={handleOnClick3}>{3}</Pagination.Item>
        </Pagination>
    )
}

export default PageList;