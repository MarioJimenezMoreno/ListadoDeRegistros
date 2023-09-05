import { Badge, Button, Card, Title } from "@tremor/react";
import { FileIcon, UploadIcon } from "./Icons";
import { useReadFile } from "../hooks/useReadFile";
import { useUploadRecords } from "../hooks/useUploadRecords";
import { useRef, useState } from "react";

export function ImportRecords() {
  const { fileContent, setFileContent, handleFileChange, requestState } =
    useReadFile();
  const { uploadRecords } = useUploadRecords();
  const fileInputLabelRef = useRef<HTMLInputElement | null>(null);
  const [fileInputValue, setFileInputValue] = useState<FileList | null>(null);

  return (
    <Card className="sticky my-5 w-md flex flex-col items-center gap-3">
      <Title className="text-4xl">Importar un documento</Title>
      <label
        htmlFor="fileInput"
        //@ts-ignore
        ref={fileInputLabelRef}
      />
      <input
        className="hidden"
        type="file"
        id="fileInput"
        onChange={(e) => {
          handleFileChange(e);
          setFileInputValue(e.target.files);
          console.log(e.target.files);
        }}
      />
      <Button
        className="flex gap-3 w-fit"
        iconPosition="right"
        icon={FileIcon}
        onClick={() => fileInputLabelRef.current?.click()}
      >
        Seleccionar archivo
      </Button>
      {requestState == true &&
        fileInputValue != null &&
        fileContent.length > 0 && (
          <Badge className="mx-auto" color="green">
            Archivo válido de {fileContent.length} registros
          </Badge>
        )}
      {requestState == false && fileInputValue != null && (
        <Badge className="mx-auto" color="red">
          Archivo no válido
        </Badge>
      )}
      <Button
        disabled={
          fileInputValue === null || !requestState || fileContent.length == 0
        }
        icon={UploadIcon}
        color="purple"
        onClick={() => {
          uploadRecords(fileContent);
          setFileInputValue(null);
          setFileContent([]);
        }}
        className="mx-auto"
      >
        Subir
      </Button>
    </Card>
  );
}
