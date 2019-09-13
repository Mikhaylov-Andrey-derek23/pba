export default function data( state=[], action ){
    if( action.type == 'GET_DATA' ){
        return [...action.data];
    }
    return state;
}