import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = React.useState([]);
  const [amount, setAmount] = React.useState(5);
  React.useEffect(() => {
    const { REACT_APP_API_BASE_URL = 'http://localhost:5001' } = process.env;
    const abortController = new AbortController();
    const loadPosts = async () => {
      fetch(`${REACT_APP_API_BASE_URL}/posts`)
        .then((response) => response.json())
        .then((res) => setPosts(res.data.reverse()));
    };
    loadPosts();
    return () => abortController.abort();
  }, []);

  const clickHandler = () => {
    if (amount >= posts.length - 1) {
      setAmount(amount - 5);
    } else {
      setAmount(amount + 5);
    }
  };

  return (
    <div className="postsSection">
      <div className="postsContainer">
        <h1>Posts</h1>
        <Link to="/posts/create" className="createBtn">
          Create a Post
        </Link>
        <p className="directions">Click on post to read more</p>
        <div className="posts">
          {posts.map((post, index) => {
            return (
              index <= amount && (
                <Link
                  key={post.post_id}
                  to={`/posts/${post.post_id}`}
                  className="postLink"
                >
                  <div className="post">
                    <div className="postName">
                      <h3>{post.post_title}</h3>
                    </div>
                    <div className="postBodySample">
                      <p>{post.post_content.slice(0, 110)}...</p>
                    </div>
                  </div>
                </Link>
              )
            );
          })}
        </div>
        <button className="amountBtn" onClick={clickHandler}>
          {amount < posts.length ? 'View More' : 'View Less'}
        </button>
      </div>
    </div>
  );
};

export default Posts;
