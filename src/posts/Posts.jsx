import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postsSlice";
import '../App.css'

const Posts = () => {
    const dispatch = useDispatch(); // Hook za slanje akcija
    const { list, loading } = useSelector((state) => state.posts); // Dohvatanje stanja
    
    // Pokrecmo API poziv samo jednom, prilikom mount-a komponente
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>

    return (
        <div>
           <h2>Blog Posts</h2>
           <div id="posts">
           {list.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
           ))}
           </div>
        </div>
    );
};

export default Posts;
