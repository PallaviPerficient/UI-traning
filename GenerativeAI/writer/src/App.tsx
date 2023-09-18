import { Writer } from "@writerai/writer-sdk";
import "./App.css";
// import { useState } from "react";

function App() {
  const sdk = new Writer({
    security: {
      apiKey:
        "4IgNOP5wtN0Sz5PWfyE3y97UHhv8i7n7XpaUB0RzTKWssYhVfOss94cljS-DdKI3UHyU5NWw0PIfnARJEu6Dq961lY6THmtCzJXxePL3JtlAi-xmHV6zO0rq1uSlzKMx",
    },
    organizationId: 599065,
  });
  console.log("sdk",sdk);
  

  // const [pname, setPname] = useState("");
  // const [details, setdetails] = useState("");

  // // const [pdetails, setPDeatils] = useState("");
  

  // const testing = () => {
  //   sdk.coWrite.generateContent({
  //       generateTemplateRequest: {
  //         inputs: [
  //           {
  //             value: [`name ,${pname}`],
  //             name: "product name",
  //           },
  //         ],
  //       },
  //       organizationId: 599065,
  //     })

  //     .then((res) => {
  //       if (res.statusCode == 200) {
  //         let val = res?.draft?.body;
  //         setdetails(val);
  //       }
  //       console.log(res);
        
  //     });
  // };
  return (
    <>
      <h2>Generative AI</h2>
      {/* {details}
      <button onClick={testing}>Generate</button> */}
    </>
  );
}

export default App;
