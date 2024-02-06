'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name ,setName]=useState("pallavi");
  const Fruit=() =>{
    setName("Pallu")
  }

  const InnerFunction = () =>{
    return(
      <h3>Inner Component</h3>
    )
  }

  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <button onClick={()=>Fruit()}>Click</button>
      <h2> Event Function and State {name} </h2>
      {/* <button onClick={() => alert("Pallacu")}>Click</button> */}
      <InnerFunction />
      {InnerFunction()}
    </main>
  );
}
