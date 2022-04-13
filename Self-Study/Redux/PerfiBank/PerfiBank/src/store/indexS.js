import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

const bankReducer = (state = {credamount:0, formdata:[{}]},  action) => {
    if (action.type === 'credit') {
        console.log(state.credamount)
        return { ...state, credamount: state.credamount + action.credAmount }
    };
    if (action.type === 'debit') {
        return {  ...state, credamount:state.credamount - action.debAmount }
    };
    if (action.type === 'formData') {
        return {  ...state, formdata:[{date:new Date(), amtType:action.formdata.amtType, checkno:action.formdata.checkno, amount: action.formdata.amount}, ...state.formdata]}
    };

    return state;

};

const store = createStore(bankReducer, composeWithDevTools( ));
export default store;