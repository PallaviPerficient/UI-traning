import React from 'react'
import PostForm from './PostForm'
import {useMutation} from '@tanstack/react-query'
import {createPost} from './api.js'


const AddPost = () => {
  const createPostmutation = useMutation({
    mutationFn: createPost
  })

  const handleAddPost = (post) =>{
    createPostmutation.mutate({
      id:3,
      ...post
    })
  }
  return (
        <>
            <h4>Add New Post</h4>
            <PostForm  onSubmit={handleAddPost}/>
           
        </>
  )
}

export default AddPost