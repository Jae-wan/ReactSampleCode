import { createActions, handleActions } from 'redux-actions';

const defaultState = {
    ID: '',
    Name: '',
    Age: 0,
};

export const { updateUser } = createActions({
    UPDATE_USER: ({key, value}) => ({ [key]: value }),

})

export const { originalUser } = createActions({
    ORIGINAL_USER: ({key, value}) => ({[key]: value}),
})

export default handleActions ({
    [updateUser]: (state, newState) => {
        const { payload } = newState;
        const nextState = {
            ...state,
            ...payload,
        };

        return nextState;
    },

    [originalUser]: (state, defaultState) => {
        const { payload } = defaultState;
        const defaultValue = {
            ...state,
            ...payload,
        };
        return defaultValue;
    },

}, defaultState);