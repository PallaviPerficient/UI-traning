function Table({tableData}){
   
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Check Number</th>
                    <th> Amount</th>
                    
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.Check_Number}</td>
                            <td>{data.Amount}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    
    )
}

export default Table;