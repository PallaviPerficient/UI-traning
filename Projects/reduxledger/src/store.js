import { createStore, combineReducers } from "redux";
import reducer from "./reducer/amountReducer";

const rootReducer = combineReducers({
    reducer,
});
const store = createStore(rootReducer);

export default store;