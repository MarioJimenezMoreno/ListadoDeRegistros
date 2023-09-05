import { RecordWithId } from "../types";
import { useRecordActions } from "./useRecordActions";

export const useUploadRecords = () => {
  const { addRecord } = useRecordActions();

  function uploadRecords(fileContent: RecordWithId[]) {
    fileContent.forEach((e) => {
      addRecord(e);
    });
  }

  return { uploadRecords };
};
