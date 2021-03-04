import { useDispatch } from "react-redux";

function Post(props) {
    const dispatch = useDispatch();
    /* const deletePost = (id) => {
        console.log('Delete called for', id);
        dispatch({type: 'DELETE_POST', id: id});
    }  */

    return (
        <div className="post">
            <h2 className="post_title">{props.post.title}</h2>
            <p className="post_message">{props.post.message}</p>
            <div className="control-buttons">
            <button className="edit" onClick={() => { dispatch({ type: 'EDIT_POST', id: props.post.id }) }}> Edit</button>
            <button className="delete" onClick={() => { dispatch({ type: 'DELETE_POST', id: props.post.id }) }}>Delete</button>
            </div>
        </div>
    );
}

export default Post;