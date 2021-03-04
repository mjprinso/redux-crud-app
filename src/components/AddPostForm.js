
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddPostForm = () => {
    const [formData, setFormData] = useState({});
    const [submitData, setSubmitData] = useState(false);
    // const count = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = event => {
        // console.log(event);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    // console.log(count);

    const handleSubmit = event => {
        event.preventDefault();
        const data = { ...formData, id: new Date(), editing: false };
        console.log(formData, data);
        setSubmitData(true);
        // this.props.dispatch({
        //     type: 'ADD_POST',
        //     data: data
        // });
        dispatch({
            type: 'ADD_POST',
            data: data
        });
        setTimeout(() => {
            setSubmitData(false);
            setFormData({});
        }, 3000);
    }

    return (
        <div className="post-container">
            <h1 className="post_heading">Create Post!</h1>
            {/* {count.state} */}
            <form  className="form" onSubmit={handleSubmit}>
                <input required name="title" type="text" placeholder="Enter Post Title" onChange={handleChange} value={formData.title || ''} /><br /><br />
                <textarea name="message" required rows="5" cols="28" placeholder="Enter Post" onChange={handleChange} value={formData.message || ''} /><br /><br />
                <button type="submit" disabled={submitData}>Post</button>
            </form>
        </div>
    );
}

export default AddPostForm;


/* import React, { useState, useReducer } from 'react';

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            title: '',
            message: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

const AddPostForm = () => {

    const [formData, setFormData] = useReducer(formReducer, {title: '', message: ''});
    const [submitData, setSubmitData] = useState(false);

    const handleChange = event => {
        console.log(event);
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        // const title = getTitle.value;
        // const message = getMessage.value;
        // const data = { id: new Date(), title, message };
        const data = {...formData, id: new Date() };
        console.log(formData, data);
        // setSubmitData(false);
        setSubmitData(true);

        setTimeout(() => {
            setSubmitData(false);
            setFormData({reset: true});
        }, 3000);
    }

    return (
        <div className="App">
            <h1>Create Post!</h1>
            <form onSubmit={handleSubmit}>
                <input required name="title" type="text" placeholder="Enter Post Title" onChange={handleChange} value={formData.title} /><br /><br />
                <textarea name="message" required rows="5" cols="28" placeholder="Enter Post" onChange={handleChange} value={formData.title} /><br /><br />
                <button type="submit" disabled={submitData}>Post</button>
            </form>
        </div>
    );
}

export default AddPostForm; */