'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
  return (
    <>
        <div>About</div>
        <Link href='/'>Go to Home Page</Link>
        <br />
        <br />
        <Link href='/about/aboutcollege'>Go to College Page</Link>
        <br />
        <br />
        <button onClick={()=>router.push("/about/aboutstudent")}>About Student</button>
    </>

  )
}

export default page