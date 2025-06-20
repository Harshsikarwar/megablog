import React from "react";
import service from "../appwrite/config"
import { Link } from "react-router-dom";

export default function PostCard({
    $id,
    title,
    featuredImage
}){
    return(
        <Link to={`/post/${$id}`}>
            <div className="postCard">
                <div className="postCardImgDiv">
                    <img className="postCardImg" src={service.getFilePreview(featuredImage)} alt={title}></img>
                </div>
                <h2 className="postCardTitle">{title}</h2>
            </div>
        </Link>
    )
}