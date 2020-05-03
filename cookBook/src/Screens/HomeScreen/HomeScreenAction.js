import * as ACTIONTYPE from './ActionType';

export const foodData = (data) => {
    return {
        type: ACTIONTYPE.FOODTYPE,
        payload: data
    }
}