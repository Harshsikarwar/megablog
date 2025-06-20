import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

export default function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return(
        <>
            <button className="logoutBtn" onClick={()=>logoutHandler()}></button>
        </>
    )
}