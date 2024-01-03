import React from 'react'
import AddPost from './AddPost';
import {useQuery} from '@tanstack/react-query'
import {fetchPosts} from './api.js'
import { Navigate, useNavigate } from 'react-router-dom';

const Postlist = () => {

    const navigate = useNavigate()
    const {isLoading , isError , data :posts ,error} = useQuery({
        queryKey : ["posts"],
        queryFn : fetchPosts
    });



  if(isLoading){
        return 'Loading ...'
    }
    if(isError){
        return `Error ${error.message}`
    }

  return (
    <>
        <AddPost />
        {posts.map(post =>(
            <div key={post.id} className='postlist-container'>
                <h4 onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h4>
                <button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button>
                <button>Delete</button>

            </div>
        ))}
    </>
  )
}

export default Postlist