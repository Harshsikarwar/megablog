import React from "react";

export default function Button({
    children,
    type="submit",
    round="10px",
    textColor="white",
    bgColor="blue",
    size="18px",
    classname=""
}){
    return(
        <button type={type} className={classname} style={`color : ${textColor} background-color : ${bgColor} font-size : ${size} border-radius : ${round}`}>
            {children}
        </button>
    )
}