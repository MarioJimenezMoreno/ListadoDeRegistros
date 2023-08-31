import { deleteRecordById, addNewRecord } from "../store/records/slice";
import { RecordId, RecordWithId } from "../types";
import { useAppDispatch } from "./store";

export const useRecordActions = () => {
  const dispatch = useAppDispatch();

  const addRecord = ({ id, time, company, position }: RecordWithId) => {
    dispatch(addNewRecord({ id, time, company, position }));
  };

  const removeRecord = (id: RecordId) => {
    dispatch(deleteRecordById(id));
  };
  return { addRecord, removeRecord };
};
