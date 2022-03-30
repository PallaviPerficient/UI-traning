import React ,{ useState } from "react";

const Table = (tableData) => {
    // const [table ,SetTable ] = useState([]);
    const InputData = [];
    InputData.push(tableData);
    console.log(InputData);
    // SetTable(tableData);
    // console.log(table);
    console.log(tableData);

        // const settab = () =>{
        //     SetTableData([ ...formInputData, tableData])
        // }

    

    // let date = tableData.date ? tableData.date.getDate() + "-"+ parseInt(tableData.date.getMonth()+1) +"-"+tableData.date.getFullYear(): null;
    return(
        
        // <table className="table">
        //     <thead>
        //         <tr>
        //             <th>Sr.No</th>
        //             <th>Date</th>
        //             <th>Check Number</th>
        //             <th>Amount</th>
        //             <th>Type</th>
                    
        //         </tr>
        //     </thead>
        //     <tbody>
        //     {
        //         tableData?.tableData?.map((formInputData, index)=>{
        //             return(
        //                 <tr key={index}>
        //                     <td>{index+1}</td>
        //                     {/* <td>{date}</td> */}
        //                     <td>{formInputData.Check_Number}</td>
        //                     <td>{formInputData.Amount}</td>
        //                 </tr>
        //             )
        //         })
        //     }
        //     </tbody>
        // </table>
        <></>
    )
}

export default Table;