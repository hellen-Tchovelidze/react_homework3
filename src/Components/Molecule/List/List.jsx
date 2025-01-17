import React from "react";
import "./List.css"


function List({photo, text, numbers,className, color}) {
    return(
        <>
<div className={color}>
<div className="box">
    <img src={photo} alt="" />
    <h1 className={className}>{text}</h1>
</div>

<div className="box">
    <h1 className="numb">{numbers}</h1>
    <span className="spantex">/ 100</span>
</div>
</div>
        </>
    )
}

export default List