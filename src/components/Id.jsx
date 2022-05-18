import React from "react";
import { useParams } from "react-router-dom";

const Id = (props)=> {
    const { id } = useParams();
    return (
        <>
            {
                isNaN(id)?
                    <h1>The word is: { id } </h1>:
                    <h1>The number is: { id} </h1>
            }
        </>
    )
}

export default Id