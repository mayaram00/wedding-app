import { createAction, createReducer } from "@reduxjs/toolkit";
export type Page =
  | "Home"
  | "Our Journey"
  | "Photos"
  | "Wedding Party"
  | "Schedule"
  | "RSVP";
export interface PageState {
  selectedPage: Page;
}
export const switchPage = createAction<Page>("page/switchPage");

const initialState: PageState = { selectedPage: "Wedding Party" };
export const pageReducer = createReducer(initialState, (builder) => {
  builder.addCase(switchPage, (state, action) => {
    state.selectedPage = action.payload;
  });
});
