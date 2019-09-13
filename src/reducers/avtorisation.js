export default function avtorisation( state={avtorization : false, message : false}, action ){
    if( action.type == 'AVTORIZATION' ){
        if(action.data.login === "test" && action.data.pass === "test"){
            const MyState = state;
            MyState.avtorization = true;
            return {...MyState}
        }else if(action.data.login === "test1" && action.data.pass === "test1"){
            const MyState = state;
            MyState.message = "Server error, please try again later";
            return {...MyState}
        }else{
            const MyState = state;
            MyState.message = "Invalid login / password";
            return {...MyState}
        }
       
    }

    return state;
}