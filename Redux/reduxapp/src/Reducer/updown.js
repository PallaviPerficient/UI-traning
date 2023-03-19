const initialstate = 0;

const  changethenumber = (state = initialstate ,action) =>{
    switch(action.type){
        case 'Increament' : return state + 1 ;
        case 'Decreament' : return state  - 1 ;
        default : return state
    }
}

export default changethenumber;