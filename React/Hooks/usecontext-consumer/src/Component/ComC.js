import React from "react";
import { Firstname } from "../App";
import { Lastname } from "../App";
import { Address } from "../App";

const ComC = () => {
    return (
        <>
            <Firstname.Consumer>
                {(fname) => {
                return (
                    <Lastname.Consumer>
                        {(lname) => {
                            return(
                                <Address.Consumer>
                                    {(add) => {
                                        return(
                                            <h3>{fname} {lname} {add} </h3>
                                        )
                                    }
                                    }
                                </Address.Consumer>
                            );
                        }}
                    </Lastname.Consumer>
                )
            }}
            </Firstname.Consumer>
        </>
    )
}

export default ComC;