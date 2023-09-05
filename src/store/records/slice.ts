import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RecordId, RecordWithId } from "../../types";

const defaultState = [
  {
    id: "1",
    time: new Date("2023-08-05"),
    company: "Kenos Technology",
    companyweb: "https://kenostechnology.com",
    position: ".Net C# Developer",
    offerlink:
      "https://trabajo.kenostechnology.com/jobs/35005724/Data-Engineer-AI/",
  },
  {
    id: "2",
    time: new Date("2023-08-24"),
    company: "TD SYNEX",
    companyweb: "https://es.tdsynnex.com",
    position: "Prácticas durante 16 meses",
    offerlink:
      "https://synnex.wd5.myworkdayjobs.com/es/tdsynnexcareers/details/Trainee-Intern_R23486",
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
      const idToRemove = action.payload;
      return state.filter((record) => record.id !== idToRemove);
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
      const idToRollback = action.payload.id;
      return state.filter((record) => record.id !== idToRollback);
    },
    editExistingRecord: (state, action: PayloadAction<RecordId>) => {
      const idToEdit = action.payload;
    },
    resolveEditedRecord: (state, action: PayloadAction<RecordWithId>) => {
      const idToSave = action.payload.id;
    },
  },
});

export default recordsSlice.reducer;

export const {
  addNewRecord,
  deleteRecordById,
  rollbackDeletedRecord,
  rollbackAddedRecord,
  editExistingRecord,
  resolveEditedRecord,
} = recordsSlice.actions;
