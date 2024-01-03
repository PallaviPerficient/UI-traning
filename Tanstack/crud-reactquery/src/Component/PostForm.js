import React, { useState } from 'react'

const PostForm = ( {onSubmit} ) => {
    const [post, setPost] = useState({
        title:"",
        body:""
    });

    const handleChangeInput =(e) =>{
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
    }
    const renderField = (label) => (
        <div>
            <label>{label}</label>
            <input type="input" onChange={handleChangeInput} name={label} value={post[label]}/>
        </div>
    )

    const handleSubmit =(e) =>{
        e.preventDefault();
        onSubmit(post)
        setPost({
            title :"",
            body:''
        })
    }
  return (
    <>
        <form>
            {renderField("Title ")}
            {renderField("Body ")}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default PostForm