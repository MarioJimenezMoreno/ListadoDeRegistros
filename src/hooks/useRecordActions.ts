import {
  deleteRecordById,
  addNewRecord,
  editExistingRecord,
} from "../store/records/slice";
import { RecordId, RecordWithId } from "../types";
import { useAppDispatch } from "./store";

export const useRecordActions = () => {
  const dispatch = useAppDispatch();

  const addRecord = ({
    id,
    time,
    company,
    position,
    offerlink,
    companyweb,
  }: RecordWithId) => {
    dispatch(
      addNewRecord({ id, time, company, position, offerlink, companyweb })
    );
  };

  const removeRecord = (id: RecordId) => {
    dispatch(deleteRecordById(id));
  };

  const editRecord = (id: RecordId) => {
    dispatch(editExistingRecord(id));
  };
  return { addRecord, removeRecord, editRecord };
};
