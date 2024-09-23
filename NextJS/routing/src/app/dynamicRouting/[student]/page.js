'use client'
export default function Student({params}){
    console.log("param" ,params );
    return(
        <>
            <h2>Student Details{params.student}</h2>
        </>
    )
}