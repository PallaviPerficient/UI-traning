import React from 'react';
import {fetchPost} from './api.js'
import {useQuery} from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';


const Post = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const {isLoading , isError , data :datapost ,error} = useQuery({
        queryKey : ["posts",id],
        queryFn :()=> fetchPost(id),
    });



  if(isLoading){
        return 'Loading ...'
    }
    if(isError){
        return `Error ${error.message}`
    }

  return (

    <>
        <button onClick={() => navigate('/')}>Back to list post</button>
        <h3>{datapost.title}</h3>
        <h2>{datapost.body}</h2>
    
    </>
  )
}

export default Post