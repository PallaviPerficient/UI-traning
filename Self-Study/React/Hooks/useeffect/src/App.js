import React ,{useState ,useEffect} from 'react'


function App() {
  const[update ,Setupdate]= useState(0);

  useEffect(() =>{
    console.log("UseEffect");
  },[update]) /// [update]= jab update state ke update pr useEffect call hoga.it also call condition 
  // And we can use multiple  useEFFect in our same component like one useEffect for one state another useeffect for 
  // another state.
  return (
    <div className="App">
      <h1>Count :{update}</h1>
      <button onClick={() => Setupdate(update+1)}> Counter</button>
      {/* jitne bar mai state update krungi  unte br useEffect call hoga */}
    </div>
  );
}

export default App;
