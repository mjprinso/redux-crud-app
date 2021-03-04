import { useSelector } from 'react-redux';

import Post from './Post';
import EditPostForm from './EditPostForm';

const AllPosts = () => {
    const posts = useSelector(state => state);
    return (
        <div>
            <h1 className="post_heading">All Posts Here!</h1>
            {/* {posts.map((post) => <Post key={post.id} post={post} />)} */}
            {posts.map((post) => (
                <div key={post.id}>
                    {post.editing ? <EditPostForm post={post} key={post.id} /> : <Post key={post.id} post={post} />}
                </div>
            ))}
        </div>
    );
}

export default AllPosts;