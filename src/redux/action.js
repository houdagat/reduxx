import { DECREMENT, INCREMENT} from "./actionTypes";
export const incrementHandler = () => {
    return {
        type: INCREMENT,
    };
};

export const  decrementHandler = () => {
    return {
        type: DECREMENT,
    };
};