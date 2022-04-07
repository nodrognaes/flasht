import { createSlice } from '@reduxjs/toolkit';

const initialState = {topics: {}}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        
    }
})

export const selectTopics = (state) => state.quizzes;
export const { addTopic, addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;