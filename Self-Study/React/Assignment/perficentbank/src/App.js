import React ,{useState} from "react";
import Form from "./Component/Form";
import Table from "./Table";
function App(props) {
  // const [tableData, SetTableData] = useState()
  // const data =[{
  //   check_number:"",
  //   amount:""
  // }]
  return (
    <div className="App">
      <h1>Perficient Bank</h1>
      <Form amountType="debit" />
      <Form amountType="Credit" />
      {/* <Table tableData={data}  /> */}

    </div>
  );
}

export default App;
