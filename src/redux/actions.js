import { GET_PICTURES } from "./action_types";

export function getPictures() {
    return function(dispatch) {
        return fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(json => dispatch({type: GET_PICTURES, payload: json}))
    }
}

console.log(getPictures())