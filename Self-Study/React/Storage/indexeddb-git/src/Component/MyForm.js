import React, { useState } from "react";
import ValidatorFn from "./ValidateFunction";
import { useIndexedDB } from "react-indexed-db";

// const API_URL = "https://api.datamuse.com/words?ml=";

export default function MyForm() {
  const [inputs, setInputs] = useState({ userName: "", dob: "", address: "" });
  const [errors, setErrors] = useState({});
  const [words, setWords] = useState([]);
  const { add ,getAll } = useIndexedDB("Appify_users");

  const handleChange = (event) => {
    //setErrors({});
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    if (name === "userName") {
      setWords([]);
      if (value.length > 2) {
        // getMatchingWords(value);
      }
    }
  };

  // const getMatchingWords = (inputText) => {
  //   fetch(`${API_URL}${inputText}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let wordsFromApi = data.splice(0, 10);
  //       setWords(wordsFromApi.map((item) => item.word));
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  const handleClickMatchingWord = (matchingWord) => {
    setInputs({ ...inputs, userName: matchingWord });
    setWords([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let err = ValidatorFn(inputs);
    setErrors(err);
    if (!Object.keys(err).length > 0) {
      add({
        name: inputs.userName,
        dob: inputs.dob,
        address: inputs.address
      }).then(
        (event) => {
          console.log("Data added: ", event);
        },
        (error) => {
          console.log(error);
        }
      );
      getAll().then((result)=>{
        console.log("get" , result);
      })
    }
  };
  return (
    <div >
      <div>
        <h3>Create Account</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name</label>
          </div>
          <div>
            <input
              autoComplete="off"
              onChange={handleChange}
              type="file"
              name="userName"
              value={inputs.userName}
            />
            {words &&
              words.map((word, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClickMatchingWord(word)}
                >
                  {word}
                </div>
              ))}
            <span>{errors.userName}</span>
          </div>
        </div>
        <div >
          <div>
            <label>DOB</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              name="dob"
              type="date"
              value={inputs.dob}
            />
            <span>{errors.dob}</span>
          </div>
        </div>
        <div>
          <div>
            <label>Address</label>
          </div>
          <div >
            <textarea
              onChange={handleChange}
              name="address"
              value={inputs.address}
            />
            <span>{errors.address}</span>
          </div>
        </div>
        <div >
          <button
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
