import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const EditPostForm = (props) => {
    const [formData, setFormData] = useState(props.post);
    const dispatch = useDispatch();
    const [oldInfo, setOldInfo] = useState(props.post);
    const handleChange = event => {
        // console.log(event);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleEdit = event => {
        event.preventDefault();
        // const data = { ...formData, id: new Date(), editing: false };
        const data = { ...formData};
        console.log('Edit data is', formData, data);
        // setSubmitData(true);
        dispatch({
            type: 'UPDATE_POST',
            id: oldInfo.id,
            data: data
        });
        setTimeout(() => {
            // setSubmitData(false);
            // setFormData({});
        }, 3000);
    }

    return (
        <div className="post">
        <h1>Edit Post!</h1>
        <form className="form" onSubmit={handleEdit}>
            <input required name="title" type="text" placeholder="Enter Post Title" onChange={handleChange} value={formData.title || ''} /><br /><br />
            <textarea name="message" required rows="5" cols="28" placeholder="Enter Post" onChange={handleChange} value={formData.message || ''} /><br /><br />
            <button type="submit">Post</button>
        </form>
    </div>
    );
}

export default EditPostForm;