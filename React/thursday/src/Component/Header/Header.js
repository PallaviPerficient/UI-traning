import React, { useState } from "react";
import logo from "../../Images/amazon.png";
import './header.css';
// import TestComponent from './Test'

const Header = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState();
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [next, setNext] = useState("");
    const[finallist,setFinallist] = useState([next]);

    const NextButton = () => {
        setNext({ name: name,email: email, address:address,  number :number});
        setFinallist(finallist.concat(next));
       
    }
    return (
        <div>
            <div className="mainHeader">
                <img src={logo} />
                <div className="header">Amazon</div>
            </div>
            <div>

                <form>
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Address:
                            <input type="text" name="name" value={address} onChange={event => setAddress(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Mobile Number:
                            <input type="number" value={number} onChange={event => setNumber(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <button  onClick={NextButton}>Submit</button>
                    </div>
                </form>
                
            </div>
            {JSON.stringify(finallist)}
        </div>

    )
}
export default Header;