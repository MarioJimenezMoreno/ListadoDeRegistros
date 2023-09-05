import { useState } from "react";
import { RecordWithId } from "../types";

export const useReadFile = () => {
  const [fileContent, setFileContent] = useState<RecordWithId[]>([]);
  const [requestState, setRequestState] = useState<boolean | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        try {
          const content = JSON.parse(e.target?.result as string);
          setFileContent(content);
          setRequestState(true);
        } catch {
          setRequestState(false);
        }
      };

      reader.readAsText(file);
    } else {
      setFileContent([]);
    }
  };

  return {
    fileContent,
    setFileContent,
    handleFileChange,
    requestState,
    setRequestState,
  };
};
