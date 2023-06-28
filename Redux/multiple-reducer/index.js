const redux = require('redux');
// create Store method which we have use to create the store
const createStore = redux.createStore
// Combine reducer use for to combine the more reducer..
const combineReducer = redux.combineReducers

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECream = "BUY_ICECream";

// Action
function buyCake () { //Action Creator
    return {// Action Creator return function
        type:BUY_CAKE,
        info:'First Reducer'
    }
}

function buyIcecream () { //Action Creator
    return {// Action Creator return function
        type:BUY_ICECream,
    }
}

//Reducer
//(previousState , action) =newState

const initialCakeState ={
    numofCakes:10
}

const initialIcecreamState ={
    numofIceCreams:20
}


const cakereducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, // copy of State object
            numofCakes : state.numofCakes-1
        }
        default: return state
    }
}

const icereducer = (state = initialIcecreamState, action) =>{
    switch(action.type){
        case BUY_ICECream: return{
            ...state, // copy of State object
            numofIceCreams : state.numofIceCreams-1
        }
        default: return state
    }
}

const rootreducer = combineReducer({
    cake:cakereducer,
    icecream:icereducer
})
const store = createStore(rootreducer); // Redux Store

console.log("intial State",store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State",store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe();