import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RecordId, RecordWithId } from "../../types";

const defaultState = [
  {
    id: "1",
    time: new Date("2023-08-05"),
    company: "Kenos Technology",
    position: "Frontend Developer",
  },
  {
    id: "2",
    time: new Date("2023-08-24"),
    company: "TD SYNEX",
    position: "Prácticas 16 meses",
  },
];

const initialState: RecordWithId[] = (() => {
  const persistedState = localStorage.getItem("records");
  return persistedState ? JSON.parse(persistedState).records : defaultState;
})();

export const recordsSlice = createSlice({
  name: "records",
  initialState: initialState,
  reducers: {
    addNewRecord: (state, action: PayloadAction<RecordWithId>) => {
      state.push({ ...action.payload });
    },
    deleteRecordById: (state, action: PayloadAction<RecordId>) => {
      const id = action.payload;
      return state.filter((record) => record.id !== id);
    },
    rollbackDeletedRecord: (state, action: PayloadAction<RecordWithId>) => {
      const isRecordDefined = state.find(
        (record) => record.id === action.payload.id
      );
      if (!isRecordDefined) {
        state.push(action.payload);
      }
    },
    rollbackAddedRecord: (state, action: PayloadAction<RecordWithId>) => {
      const idToRemove = action.payload.id;
      return state.filter((record) => record.id !== idToRemove);
    },
  },
});

export default recordsSlice.reducer;

export const {
  addNewRecord,
  deleteRecordById,
  rollbackDeletedRecord,
  rollbackAddedRecord,
} = recordsSlice.actions;
