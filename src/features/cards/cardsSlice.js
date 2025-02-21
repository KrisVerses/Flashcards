import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = action.payload;
    },
    selectCard: (state, action) => {
      console.log(JSON.stringify(state));
      return state.cards[action.payload.id];
    },
  },
});

export const selectCards = (state) => state.cards.cards;
export const { addCard, selectCard } = cardsSlice.actions;
export default cardsSlice.reducer;
