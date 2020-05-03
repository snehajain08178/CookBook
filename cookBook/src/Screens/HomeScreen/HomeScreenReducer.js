import * as ACTIONTYPE from './ActionType';

const initialState = {
    foodTypeData: ['hihjh']
}

export const FoodDataTypeReducer = (state=initialState, action) =>  {
    switch(action.type){
        case ACTIONTYPE.FOODTYPE: 
            return {
                ...state,
                foodTypeData: action.payload
            }
        }
    return state;
}
