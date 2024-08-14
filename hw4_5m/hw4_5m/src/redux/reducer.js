import { createAction, createReducer } from '@reduxjs/toolkit';

const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';
const INCREMENT_NUM_BY_FIVE = 'INCREMENT_NUM_BY_FIVE';
const DECREMENT_NUM_BY_FIVE = 'DECREMENT_NUM_BY_FIVE';

const initialState = {
    num: 0,
};

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const resetNum = createAction(RESET_NUM);
export const incrementNumByFive = createAction(INCREMENT_NUM_BY_FIVE);
export const decrementNumByFive = createAction(DECREMENT_NUM_BY_FIVE);

export default createReducer(initialState, (builder) => {
    builder
        .addCase(INCREMENT_NUM, (state) => {
            state.num = Math.min(state.num + 1, 15);
        })
        .addCase(DECREMENT_NUM, (state) => {
            state.num = Math.max(state.num - 1, 0);
        })
        .addCase(RESET_NUM, (state) => {
            state.num = 0;
        })
        .addCase(INCREMENT_NUM_BY_FIVE, (state) => {
            state.num = Math.min(state.num + 5, 15);
        })
        .addCase(DECREMENT_NUM_BY_FIVE, (state) => {
            state.num = Math.max(state.num - 5, 0);
        });
});
