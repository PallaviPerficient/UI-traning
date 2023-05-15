import {ADD_AMOUNT,REMOVE_AMOUNT} from "./action-type";

export const addAmount = (entries) =>({
    type:ADD_AMOUNT,
    payload:entries,
});

export const removeAmount = (entrie) =>({
    type:REMOVE_AMOUNT,
    payload:entrie,
})