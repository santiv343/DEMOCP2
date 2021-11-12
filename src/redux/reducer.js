import { GET_PICTURES } from "./action_types";

const initialState={
    pictures:[],
    asd:[{}]
}


export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_PICTURES:
            return {
                pictures: action.payload
            }
        default:
            return state
    }

}