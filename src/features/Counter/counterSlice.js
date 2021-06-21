const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state) {
            return state +1;
        },

        decrease(state) {
            return state -1;
        },
    },
});

const { actions,reducers } = counterSlice;
export const { increase, decrease } = actions;//named export
export default reducers;//default export