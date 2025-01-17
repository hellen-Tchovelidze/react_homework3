import React from "react";
import "./SummerContainer.css"
import Brain from "../../../assets/images/iconoir_brain.svg"
import Chat from "../../../assets/images/iconoir_chat-remove.svg"
import Eye from "../../../assets/images/iconoir_eye-empty.svg"
import Flash from "../../../assets/images/iconoir_flash.svg"
import List from "../List/List";
import Button from "../../Atom/Button/Button";

function SummerContainer() {
    return(
        <>
<div className="SumCont">
<h1 className="sum_heading">Summary</h1>
<div className="container_list">
<List  photo ={Flash} text="Reaction" className="flash" numbers="80" color="red"/>
<List  photo ={Brain} text="Memory" className="brain" numbers="92" color="yellow"/>
<List  photo ={Chat}  text="Verbal" className="chat" numbers="61" color="green"/>
<List  photo ={Eye} text= "Visual" className="eye" numbers="73" color="purple"/>
</div>

<Button />
</div>
        </>
    )
}

export default SummerContainer