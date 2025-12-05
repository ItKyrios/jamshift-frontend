import {useState} from "react";
import "./Post.css";
import { IoIosMore } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import LikeDislike from "./LikeDislike";

export default function Post() {
    const [postData] = useState([{
        title: "Post Title",
        username: "Username",
        timestamp: "June 10, 2024",
        content: "This is an example of a post content. It can include text, images, or other media.",
        imageUrl: "https://placehold.co/400x300.png",
        userAvatar: "https://placehold.co/30x30.png",
        comments: ["lorem ipsum", "dolor sit amet"],
        likes: 0,
        dislikes: 0
    },
    {
        title: "Another Post Title",
        username: "AnotherUser",
        timestamp: "June 11, 2024",
        content: "This is another example of a post content. It can include text, images, or other media.",
        imageUrl: "https://placehold.co/400x300.png",
        userAvatar: "https://placehold.co/30x30.png",
        comments: ["dolor sit amet consectetur"],
        likes: 5,
        dislikes: 1
    },
    {
        title: "Yet Another Post Title",
        username: "YetAnotherUser",
        timestamp: "June 12, 2024",
        content: "This is yet another example of a post content. It can include text, images, or other media.",
        imageUrl: "",
        userAvatar: "https://placehold.co/30x30.png",
        comments: ["lorem ipsum dolor sit amet consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "ut enim ad minim veniam"],
        likes: 10,
        dislikes: 2
    }]);

    const handleLike = (index) => {
        console.log("Like clicked for post index:", index);
    }

    const handleDislike = (index) => {
        console.log("Dislike clicked for post index:", index);
    }
    return (
        <div>
            {postData.map((post, index) => (
                <div key={index} className="post-container">
                    <div className="post-title">
                        {post.title}
                        <hr />
                    </div>
                    <div className="post-user-info">
                        <img className="post-avatar" alt="User Avatar" src={post.userAvatar} />
                        <span className="post-username">{post.username}</span>
                        <span className="post-timestamp">{post.timestamp}</span>
                        <button className="post-options"><IoIosMore /></button>
                    </div>
                    <div className="post-content">
                        <div className="text-content">
                            <p>{post.content}</p>
                        </div>
                        <div className="image-content">
                            {post.imageUrl && <img src={post.imageUrl} alt="Post Visual Content" />}
                        </div>
                        <div className="number-of-comments">
                            {(post.comments.length === 1) ? `${post.comments.length} Comment` :
                            `${post.comments.length} Comments`}
                        </div>
                    </div>
                    <div className="post-actions">
                        <LikeDislike 
                            initialLikes={post.likes} 
                            initialDislikes={post.dislikes} 
                            onLike={() => handleLike(index)} 
                            onDislike={() => handleDislike(index)} 
                        />
                        <button className="comment-button"><AiOutlineComment /> Comment</button>
                    </div>
                </div>
            ))}
            
        </div>
    );
}