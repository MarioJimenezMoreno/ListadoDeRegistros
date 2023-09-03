import { useState } from "react";
import { RecordWithId } from "../types";

export const useReadFile = () => {
  const [fileContent, setFileContent] = useState<RecordWithId[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        try {
          const content = JSON.parse(e.target?.result as string);
          setFileContent(content);
        } catch {
          console.log("Bad Request");
        }
      };

      reader.readAsText(file);
    } else {
      setFileContent([]);
    }
  };

  return { fileContent, handleFileChange };
};
