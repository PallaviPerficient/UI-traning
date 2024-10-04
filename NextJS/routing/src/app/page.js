'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Routing</h1>
      <span>What we have in this project :</span>
      <span> Basics Routing , Linking , Navigation , useRouter= next/navigation , Nested Routing , Common Layout , Conditional Layout , usePathname , dynamic routing</span>
      <br />
      <br />
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <button onClick={() =>router.push('/login')}>Go to Login</button>
      <button onClick={() =>router.push('/about')}>Go to About</button>

    </>
  );
}
