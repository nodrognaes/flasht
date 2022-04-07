import { createSlice } from '@reduxjs/toolkit';

const initialState = {topics: {}}

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuiz: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
})

export const selectTopics = (state) => state.topics;
export const { addTopic, addQuiz } = topicsSlice.actions;
export default topicsSlice.reducer;