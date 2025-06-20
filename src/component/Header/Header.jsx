import React from "react";
import {Container, LogoutBtn} from "../index";
import {useNavigate, Link} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(){
    const authStatus = useSelector((state) => state.auth.status)
    const navigator = useNavigate()
    const navItems = [
        {
            name : "Home",
            slug : "/",
            status : true
        },
        {
            name : "Login",
            slug : "/login",
            status : !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return(<>
        <header>
            <Container>
                <nav>
                    <ul>
                        {navItems.map((item)=>
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={()=>navigator(item.slug)}>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                    </ul>
                    {authStatus && (
                        <LogoutBtn/>
                    )}
                </nav>
            </Container>
        </header>
    </>)
}