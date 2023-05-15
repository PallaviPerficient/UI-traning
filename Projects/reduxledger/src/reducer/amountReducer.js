import {ADD_AMOUNT,REMOVE_AMOUNT} from "../action/action-type";

const initialState ={
    balance:0,
    transactionHistory:[]
}

const reducer = (state=initialState,action) =>{
    const newState = {...state};
    let date = new Date().toLocaleDateString();
    switch(action.type){
        case ADD_AMOUNT:
            return {
            ...state,
            balance:state.balance + action.payload.amt,
            transactionHistory:state.transactionHistory.concat({date:date,transactiontype:'Credit',checkNumber:action.payload.check,amount:action.payload.amt})
        };
        case REMOVE_AMOUNT:
            if(state.balance >= action.payload.amt){
                return {
                    ...state,
                    balance:state.balance - action.payload.amt,
                    transactionHistory:state.transactionHistory.concat({date:date,transactiontype:'Debit',checkNumber:action.payload.check,amount:action.payload.amt})
                };
            }
            else{
                alert("Cannot Debit insufficient balance");
            }
        default:
            return state;
    };
};

export default reducer;