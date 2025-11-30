import React from "react";
import "./Post.css";
import { IoIosMore } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment } from "react-icons/ai";

export default function Post() {
    return (
        <div className="post-container">
            <div className="post-title">
                Post Title
                <hr />
            </div>
            <div className="post-user-info">
                <img className="post-avatar" alt="User Avatar" src="https://placehold.co/30x30.png" />
                <span className="post-username">Username</span>
                <span className="post-timestamp">June 10, 2024</span>
                <button className="post-options"><IoIosMore /></button>
            </div>
            <div className="post-content">
                <div className="text-content">
                    <p>This is an example of a post content. It can include text, images, or other media.</p>
                </div>
                <div className="image-content">
                    <img src="https://placehold.co/400x300.png" alt="Post Visual Content" />
                </div>
            </div>
            <div className="post-actions">
                <button className="like-button"><AiOutlineLike /> Like</button>
                <button className="dislike-button"><AiOutlineDislike /> Dislike</button>
                <button className="comment-button"><AiOutlineComment /> Comment</button>
            </div>
        </div>
    );
}