import "./App.css";
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, markItemAsDone } from "./redux/slice";
import { useState } from "react";

function App() {
  const items = useSelector((state) => state.todoList);
  // console.log("Items", items);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");

  const onChangeInput = (event) => {
    setNewItem(event.target.value);
  };

  const addNewTodoTask = () => {
    const data = {
      id: Date.now(),
      task: newItem,
      isDone: false,
    };
    dispatch(addItem(data));
    setNewItem("");
  };

  const getCompleted = () => {
    return items.filter((item) => item.isDone).length;
  };

  const getTotalCount = () => {
    return items.length;
  };

  return (
    <div className="container main-container">
      {/* Section Add item to List */}
      <div className="section-add-item flow-root">
        <MDBRow className="mb-4 mt-4">
          <MDBCol className="d-flex justify-content-center">
            <MDBInput
              className=""
              onChange={onChangeInput}
              type="email"
              id="form1Example1"
              value={newItem}
              label="Todo Task Label"
            />
          </MDBCol>
          <MDBCol>
            <MDBBtn
              type="submit"
              onClick={addNewTodoTask}
              block
              disabled={!newItem.length}
            >
              Add To List
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </div>

      {/* Section Display List */}
      <div className="section-list-items flow-root">
        <MDBTable hover>
          <MDBTableHead>
            <tr>
              <th colSpan={2} scope="col">
                <h4>Todo List</h4>
              </th>
              <th scope="col">
                Completed {getCompleted()}/{getTotalCount()}
              </th>
            </tr>
            <tr>
              <th colSpan={2} scope="col">
                <h5>Todo List Items</h5>
              </th>
              <th scope="col">
                <h5>DONE</h5>
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {items.map((item) => {
              return (
                <tr key={item.id} className="w-full">
                  <th className="w-1/2" scope="row">
                    <p className="font-semibold">{item.task}</p>
                  </th>
                  <td>
                    <button
                      className="btn-detele-item"
                      onClick={(e) => dispatch(removeItem(item.id))}
                    >
                      X
                    </button>
                  </td>
                  <td>
                    <MDBCheckbox
                      name="todocheck"
                      value={item.task}
                      id={"todocheck" + item.id}
                      label=""
                      // checked={item.isDone}
                      onClick={(e) =>
                        dispatch(markItemAsDone([item.id, !item.isDone]))
                      }
                      defaultChecked={item.isDone}
                    />
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default App;
