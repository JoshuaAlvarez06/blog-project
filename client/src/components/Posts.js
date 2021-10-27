import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const {API_BASE_URL = 'http://localhost:5000'} = process.env;
        const abortController = new AbortController();
        const loadPosts = async () => {
            fetch(`${API_BASE_URL}/posts`)
                .then(response => response.json())
                .then(res => setPosts(res.data));
        };
        loadPosts();
        return () => abortController.abort();
    }, [])
    return (
        <div>
            {posts.map(post => post.post_title)}
        </div>
    )
}

export default Posts
