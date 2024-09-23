'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    // const router = useRouter();
    // const navigate = (name) =>{
    //     router.push(name)
    // }
  return (
    <>
        <div>Login</div>
        <Link href='/'>Go to Home Page</Link>
        {/* <button onClick={() => navigate('/')}>Home Page</button> */}
    </>
  )
}

export default page