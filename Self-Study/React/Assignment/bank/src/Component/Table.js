function Table({tableData}){
    // let date = tableData.date ? tableData.date.getDate() + "-"+ parseInt(tableData.date.getMonth()+1) +"-"+tableData.date.getFullYear(): null;

    // let curDate = new Date( );
    // curDate = curDate.getHours();
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Check Number</th>
                    <th>Amount</th>
                    <th>Type</th>
                    
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            {/* <td>{date}</td> */}
                            <td>{data.Check_Number}</td>
                            <td>{data.Amount}</td>
                            {/* <td>{tableData.title}</td> */}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    
    )
}

export default Table;