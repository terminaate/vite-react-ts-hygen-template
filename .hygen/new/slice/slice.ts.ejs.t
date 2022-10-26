---
to: <%= path %>/<%= sliceName %>Slice.ts
---

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface <%= capitalizeName %>State {

}

export const initialState: <%= capitalizeName %>State = {

};

export const <%= sliceName %>Slice = createSlice({
  name: '<%= sliceName %>',
  initialState,
  reducers: {
  },
});

export const {  } = <%= sliceName %>Slice.actions;

export default <%= sliceName %>Slice.reducer;
