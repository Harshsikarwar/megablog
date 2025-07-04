import React from "react";

export default function Input({
    type="submit",
    round="10px",
    textColor="white",
    bgColor="blue",
    size="18px",
    classname="",
    id="",
    placeHolder="",
    label=""
}){
    return(
        <input label={label} placeholder={placeHolder} id={id} type={type} className={classname} style={{backgroundColor:bgColor, color:textColor, borderRadius:round, fontSize:size}}>
        </input>
    )
}