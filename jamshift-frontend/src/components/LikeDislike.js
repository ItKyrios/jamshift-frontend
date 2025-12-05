import {useState, useEffect} from 'react';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export default function LikeDislike({initialLikes, initialDislikes, onLike, onDislike}) {
    const [likes, setLikes] = useState(initialLikes || 0);
    const [dislikes, setDislikes] = useState(initialDislikes || 0);
    const [hasLiked, setHasLiked] = useState(false);
    const [hasDisliked, setHasDisliked] = useState(false);

    useEffect(() => {
        setLikes(initialLikes || 0);
    }, [initialLikes]);
    useEffect(() => {
        setDislikes(initialDislikes || 0);
    }, [initialDislikes]);

    const handleLike = () => {
        if(hasLiked) {
            setLikes(likes - 1);
            setHasLiked(false);
            return;
        } else if(hasDisliked) {
            setDislikes(dislikes - 1);
            setHasDisliked(false);
        }
        setLikes(likes + 1);
        setHasLiked(true);
        if(onLike) onLike();
    }
    const handleDislike = () => {
        if (hasDisliked) {
            setDislikes(dislikes - 1);
            setHasDisliked(false);
            return;
        } else if (hasLiked) {
            setLikes(likes - 1);
            setHasLiked(false);
        }
        setDislikes(dislikes + 1);
        setHasDisliked(true);
        if(onDislike) onDislike();
    }
    return (
        <div>
            <button onClick={handleLike} className='like-button'><AiOutlineLike /> {likes}</button>
            <button onClick={handleDislike} className='dislike-button'><AiOutlineDislike /> {dislikes}</button>
        </div>
    );
}