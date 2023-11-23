/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import mockdata from "./data.json";
import "./box.css";

const BoxA = () => {
  const [list, setlist] = useState();
  const [clickedValue, setClickedValue] = useState();

  const handleClick = (value) => {
    console.log("right",value)
    const activematch = list?.map((item) => {
        if(item.status === 'active'){
            console.log("====");
            return {
                ...item
            }
        }
    })
    console.log("activematch",activematch);
    setlist(ab =>
        ab.filter(item => {
          return item.status === 'active';
        }),
      );  
  };

  const checkBoxClick = (label) =>{
    console.log("aaa");
    const match = list?.map((item) =>{
        if(item.carName === label){
            return {
                ...item,
                status : 'active'
            }
        }
        return item;
    })
    console.log("match",match);
    setlist(match)
  }

  useEffect(() => {
    setlist(mockdata.carName);
  }, [mockdata]);
  console.log("list", list);
  return (
    <>
      <div className="container">
        <div className="boxa">
            <h4>Box A</h4>
            {list?.map((item) => (
            <div>
                <input type="checkbox"  name="E" value="E" onClick={() => checkBoxClick(item.carName)}/> <label>{item.carName}</label>
            </div>
        ))}
        </div>
        <div className="btn">
          <button onClick={handleClick("right")}><span>&#8594;</span></button>
          <button onClick={handleClick("left")}><span>&#8592;</span></button>
        </div>
        <div className="boxa">
            <h4>Box B</h4>
        </div>
      </div>
    </>
  );
};

export default BoxA;
