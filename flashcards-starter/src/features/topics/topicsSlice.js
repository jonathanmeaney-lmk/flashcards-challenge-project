import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";


export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
          const {topicId, name, icon} = action.payload;
          state.topics[topicId] = {
            id: topicId,
            name: name,
            icon,
            quizIds: []
          };
    
          
          return state;
        },
    }
  });
  
  export const selectTopics = (state) => {
    return state.topics.topics;
  } 

  export const { addTopic } = topicsSlice.actions;
  export default topicsSlice.reducer;