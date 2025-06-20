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
        <button type={type} className={classname} style={{backgroundColor:bgColor, color:textColor, borderRadius:round, fontSize:size}}>
            {children}
        </button>
    )
}