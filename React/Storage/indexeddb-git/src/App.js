
// import "./styles.css";
// import { DBConfig } from "./components/DBConfig";
import { initDB } from "react-indexed-db";
import { DBConfig } from "./Component/DBConfig";
import MyForm from "./Component/MyForm";

initDB(DBConfig);

export default function App() {
  return (
    <div>
      <MyForm/>
    </div>
  );
}
