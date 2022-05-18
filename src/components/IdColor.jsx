import React from "react";
import { useParams } from "react-router-dom";

const IdColor = (props)=> {
    const { id, color1, color2 } = useParams();
    return (
        <>
            {
                isNaN(id)?
                    <h1 style={{color: color1, backgroundColor: color2}}>The word is: { id } </h1>:
                    <h1 style={{color: color1, backgroundColor: color2}}>The number is: { id} </h1>
            }
        </>
    )
}

export default IdColor