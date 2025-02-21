import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    },
    addQuizId: (state, action) => {
      //   state.topics[action.payload.topicId]
      console.log("Extracted State (Using JSON):");
      console.log(JSON.parse(JSON.stringify(state))); // Converts to a readable object
      console.log("action object");
      console.log(action);
      console.log("adding quiz id");
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    },
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
