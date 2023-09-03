import { useReadFile } from "./useReadFile";
import { useRecordActions } from "./useRecordActions";

export const useUploadRecords = () => {
  const { fileContent } = useReadFile();
  const { addRecord } = useRecordActions();

  function uploadRecords() {
    fileContent.forEach((e) => {
      addRecord(e);
    });
  }

  return { uploadRecords };
};
