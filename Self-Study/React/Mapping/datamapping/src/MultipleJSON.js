import React from 'react';

function MultipleJSON(){
    const multiple=[
            {"isbn": "123-456-222",  
        "author": 
            {
            "lastname": "Doe",
            "firstname": "Jane"
            },
        "editor": 
            {
            "lastname": "Smith",
            "firstname": "Jane"
            },
        "title": "The Ultimate Database Study Guide",  
        "category": ["Non-Fiction", "Technology"]
        }
    ]
    return(
        multiple.map((item) =>(
            <div>
            {item.author.firstname} <br></br>
            {item.author.lastname}<br></br>
            {item.editor.lastname}<br></br>
            {item.isbn}<br></br>
            {item.title}<br></br>
            {item.category}<br></br>
            </div>
        ))
    )
}

export default MultipleJSON;