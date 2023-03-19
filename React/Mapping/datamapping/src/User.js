import React from "react";

function User(){
    const data=[
        {
            id:1,
            name:"Pallavi",
            number:789456
        },
        {
            id:2,
            name:"Praju",
            number:897456213
        },
        {
            id:3,
            name:"P",
            number:8745668456
            
        }
    ]
    return(
        data.map((user)=>(
            <div>{ `Name `}{user.name} <br></br>{`Number `}{user.number}</div>
            )
        )
    )
}

export default User;