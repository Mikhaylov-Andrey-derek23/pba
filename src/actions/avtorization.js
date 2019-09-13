export const avtorization = ()=>{
    return dispatch=>{
        fetch('api/data.json').
        then(response=>{
            return response.json();
        }).
        then(data=>{
            dispatch({
                type: 'GET_DATA',
                data: data
            })
        });
    }}