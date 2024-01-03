import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Home = () => {
    const {data} = useQuery({
        queryKey: ['anything'],
        queryFn: () =>{
        return axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=> res.data);
        }
    })
    console.log("data",data);
  return (

    <>
    <span>
        Data Fetch
    </span>
    <div>{data?.title}</div>
    </>
  )
}

export default Home