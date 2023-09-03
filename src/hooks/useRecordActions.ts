import { deleteRecordById, addNewRecord } from "../store/records/slice";
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
    offerweb,
  }: RecordWithId) => {
    dispatch(
      addNewRecord({ id, time, company, position, offerlink, offerweb })
    );
  };

  const removeRecord = (id: RecordId) => {
    dispatch(deleteRecordById(id));
  };
  return { addRecord, removeRecord };
};
