import {
    BUDGET_GET_REGUEST,
    BUDGET_GET_SUCCESS,
    BUDGET_GET_FAILURE,
    BUDGET_GET_REQUEST,

    BUDGETED_CATEGORIES_GET_REQUEST,
    BUDGETED_CATEGORIES_GET_SUCCESS,
    BUDGETED_CATEGORIES_GET_FAILURE,
} from 'data/constants';
import API from 'data/fetch';

export const fetchBudget = (id) => async (dispatch) => {
    // dispatch akcje BUDGET_GET_REGUEST
    dispatch({
        type: BUDGET_GET_REQUEST
    })
    // wykonac request do api
    const response = await API.budget.fetchBudget(id);
    console.log(response);
    const data = await response.json();
    // dispatch akcje BUDGET_GET_SUCESS + przekazać dane z requestu
    try {
        dispatch({
            type: BUDGET_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BUDGET_GET_FAILURE,
        })
    }

}

export const fetchBudgetedCategories = (id) => async (dispatch) => {
    // dispatch akcje BUDGET_GET_REGUEST
    dispatch({
        type: BUDGETED_CATEGORIES_GET_REQUEST
    })
    // wykonac request do api
    const response = await API.budget.fetchBudgetedCategories(id);
    console.log(response);
    const data = await response.json();
    // dispatch akcje BUDGET_GET_SUCESS + przekazać dane z requestu
    try {
        dispatch({
            type: BUDGETED_CATEGORIES_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BUDGETED_CATEGORIES_GET_FAILURE,
        })
    }
}