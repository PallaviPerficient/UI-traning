import './App.css';
import  Name,{Desgination,myAddress} from "./Name"
let curDate = new Date( );
curDate = curDate.getHours();

let greeting = '';
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = "Green";

} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = "Orange";

} else {
  greeting = 'Good Night';
  cssStyle.color = 'Red';
}
function App() {
  return (
    <>
      <div>
        <h2>Hello ,<span style={cssStyle}> {greeting} </span>{Name} {Desgination}  {myAddress()}</h2 >  
      </div>
    </>
  );
}

export default App;
